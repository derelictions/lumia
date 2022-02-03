# %% [markdown]
# # Transfer
# Simple utility for neural style transfer using pretrained VGG34 model with Pytorch for use by Lumia.
# %% 
import torch
import torch.nn as nn 
import torch.nn.functional as F 
import torch.optim as optim
import numpy as np

import torchvision.transforms as transforms
import torchvision.models as models

from PIL import Image
import matplotlib.pyplot as plt
plt.style.use('seaborn')

import argparse

import copy
# %%

## set GPU if available 
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# %%

# we use some demo images for the demo and initial commit, but actual
# images are retreived from the file system as the script is invoked 

# %%

# image utilities 

imgsiz = 512 if device == 'cuda' else 128

loader = transforms.Compose([
    transforms.Resize(imgsiz),
    transforms.ToTensor()    
])

unloader = transforms.ToPILImage()

def image_load(image_path):
    image = Image.open(image_path)
    image = loader(image).unsqueeze(0)
    return image.to(device, torch.float)

def imgshow(tensor):
    image = tensor.cpu().clone()
    image = unloader(image.squeeze(0))
    plt.imshow(image)
    
# %%

## content and style functions

def gram_loss_matrix(input):
    batch_size, fmap_n, a, b = input.size()
    features = input.view(batch_size*fmap_n, a*b)
    Gmat = torch.mm(features, features.t())
    return Gmat.div(batch_size*fmap_n*a*b)
    
class StyleLoss(nn.Module):

    def __init__(self, target_feature):
        super(StyleLoss, self).__init__()
        self.target = gram_loss_matrix(target_feature).detach()

    def forward(self, input):
        Gmat = gram_loss_matrix(input)
        self.loss = F.mse_loss(Gmat, self.target)
        return input


class ContentLoss(nn.Module):

    def __init__(self, target):
        super(ContentLoss, self).__init__()
        self.target = target.detach()

    def forward(self, input):
        self.loss = F.mse_loss(input, self.target)
        return input


class Normalize(nn.Module):
    
    def __init__(self, mean, std):
        super(Normalize, self).__init__()
        self.mean = torch.tensor(mean).view(-1, 1, 1)
        self.std = torch.tensor(std).view(-1,1,1)
    
    def forward(self, img):
        return (img - self.mean) / self.std

# %% 
## actual model

content_layers_default = ['conv_4']
style_layers_default = [f'conv_{i}' for i in range(1, 6)]

cnn = models.vgg19(pretrained=True).features.to(device).eval()
cnn_normalization_mean = torch.tensor([0.485, 0.456, 0.406]).to(device)
cnn_normalization_std = torch.tensor([0.229, 0.224, 0.225]).to(device)

def build_model(cnn, normalization_mean, normalization_std,
                               style_img, content_img, 
                               content_layers=content_layers_default, 
                               style_layers=style_layers_default):
    
    normalizer = Normalize(normalization_mean, normalization_std)
    content_losses = []
    style_losses = []
    
    model = nn.Sequential(normalizer)
    i = 0
    for layer in cnn.children():
        if isinstance(layer,nn.Conv2d):
            i+=1
            name = f'conv_{i}'
        elif isinstance(layer, nn.ReLU):
            name = f'relu_{i}'
            layer = nn.ReLU(in_place=False)
        elif isinstance(layer, nn.MaxPool2d):
            name = f'bn_{i}'
        else:
            raise RuntimeError(f'Unrecognized layer: {layer.__class__.__name__}')
        
        model.add_module(name, layer)
        
        if name in content_layers:
            target_feature = model(content_img).detach()
            content_loss = ContentLoss(target_feature)
            model.add_module(f'content_loss_{i}', content_loss)
            content_losses.append(content_loss)
        
        if name in style_layers:
            target_feature = model(style_layers).detach()
            style_loss = StyleLoss(target_feature)
            model.add_module(f'style_loss_{i}', style_loss)
            style_losses.append(style_loss)
    
    for i in range(len(model) - 1, -1, -1):
        if isinstance(model[i], ContentLoss) or isinstance(model[i], StyleLoss):
            break
    
    model = model[:(i + 1)]
    return model, style_losses, content_losses


        


