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

// interface HomeProps extends React.HTMLAttributes<HTMLElement> {
// 	variant: variant | undefined;
// }

// home page component for the application
interface HomeContentProps extends React.HTMLAttributes<HTMLElement> {
	variant: string | undefined;
}

const HomeContent: FunctionComponent<HomeContentProps> = ({
	variant: variant,
}) => {
	return (
		<>
			<Stack spacing={8} w={{ base: '80%', md: '40%' }}>
				<Heading color={'#7df9ff'} as={'h2'}>
					a new way to create art...
				</Heading>
				<Text fontSize={'xl'}>
					transfer and combine styles between your favorite artists, scenes and
					pictures. go as crazy as you want!
				</Text>
				<>
					<Text display='block'>
						<Button>Join now</Button>
					</Text>
				</>
				<Text fontSize={'md'}>Data collected from art work maybe mined.</Text>
			</Stack>
			<Box
				align='center'
				display='block'
				// mt={variant?.navigation === 'base' ? 12 : 0}
			>
				<Image
					w={variant === 'lg' ? '100%' : '80%'}
					alt='Golden gate bridge in Van Goghs Starry Night style using neural style transfer'
					src={'/assets/hero_img_dark.png'}
					rounded={'2rem'}
					shadow={'2xl'}
				/>
			</Box>
		</>
	);
};

const Home: FunctionComponent<{}> = () => {
	const variant = useBreakpointValue({ sm: 'sm', md: 'md', lg: 'lg' });
	return (
		//flex
		<Flex
			// direction={variant?.navigation === 'base' ? 'column-reverse' : 'row'}
			direction={{ base: 'column-reverse', md: 'row' }}
			// direction={'row'}
			align='center'
			justify={{ base: 'center', md: 'space-around' }}
			// height='100vh'
			minH={'100vh'}
			// margin={'0 auto'}
			// maxWidth={variantt === 'lg' ? '1200px' : 'auto'}
			// backgroundColor='gray.50'
		>
			{variant === 'sm' ? (
				// <Stack direction={'column-reverse'}>
				<HomeContent variant={variant} />
			) : (
				// </Stack>
				<HStack justify={'space-around'}>
					<HomeContent variant={variant} />
				</HStack>
			)}
		</Flex>
	);
};

export default Home;
