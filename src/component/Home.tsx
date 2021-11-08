import router from 'next/router';
import React, { FunctionComponent, HTMLAttributes, useState } from 'react';
import { AppProps } from 'next/app';
import {
	Box,
	Text,
	Heading,
	Image,
	Stack,
	HStack,
	Link,
	useDisclosure,
	Flex,
	Spacer,
	useBreakpointValue,
	Button,
	VStack,
	MenuItem,
} from '@chakra-ui/react';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
	TriangleUpIcon,
} from '@chakra-ui/icons';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { variant } from '../types';

interface HomeProps extends React.HTMLAttributes<HTMLElement> {
	variant: variant | undefined;
}

// home page component for the application
const Home: FunctionComponent<HomeProps> = ({ variant }) => {
	return (
		//flex
		<Flex
			direction={variant?.navigation === 'base' ? 'column' : 'row'}
			// direction={'row'}
			align='center'
			justify={variant?.navigation === 'base' ? 'center' : 'space-around'}
			height='100vh'
			// margin={'0 auto'}
			// maxWidth={variant?.navigation === 'lg' ? '1200px' : 'auto'}

			// backgroundColor='gray.50'
		>
			<Stack
				spacing={8}
				w={variant?.navigation === 'base' ? '80%' : '40%'}
			>
				<Heading color={'#7df9ff'} as={'h2'}>
					a new way to create art...
				</Heading>
				<Text fontSize={'xl'}>
					transfer and combine styles between your favorite artists,
					scenes and pictures. go as crazy as you want!
				</Text>
				<>
					<Text display='block'>
						<Button>Join now</Button>
					</Text>
				</>
				<Text fontSize={'md'}>
					Data collected from art work maybe mined.
				</Text>
			</Stack>
			<Box>
				<Image
					alt='Golden gate bridge in Van Goghs Starry Night style using neural style transfer'
					src={'/assets/hero_img_dark.png'}
					rounded={'2rem'}
					shadow={'2xl'}
				/>
			</Box>
		</Flex>
	);
};

export default Home;
