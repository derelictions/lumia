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
	useColorModeValue,
	Container,
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
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// home page component for the application
const Home: FunctionComponent<{}> = () => {
	const variant = useBreakpointValue({
		base: 'base',
		sm: 'base',
		md: 'md',
		lg: 'lg',
	});
	return (
		<Flex maxWidth={{ lg: '1200px' }}>
			<Stack
				direction={['column-reverse', 'column-reverse', 'row']}
				justify={['center', 'center', 'space-around']}
				align={'center'}
			>
				<HomeContent variant={variant} />
			</Stack>
		</Flex>
	);
};
interface HomeContentProps extends React.HTMLAttributes<HTMLElement> {
	variant: string | undefined;
}

const HomeContent: FunctionComponent<HomeContentProps> = ({
	variant: variant,
}) => {
	// const headerColor = useColorModeValue('pink.300', 'cyan.300');
	const headerColor = useColorModeValue(
		'linear(to-l, pink.400, purple.400)',
		'linear(to-l, cyan.300, blue.300)'
	);
	return (
		<>
			<Stack
				spacing={[4, 8]}
				w={{ base: '80%', md: '40%' }}
				pt={4}
				pb={6}
				pl={{ md: 8 }}
			>
				<Heading bgGradient={headerColor} bgClip={'text'} as={'h2'}>
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
			<MotionBox
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				align={'center'}
				display={'block'}
			>
				<Image
					w={variant === 'lg' ? '100%' : '80%'}
					alt='Golden gate bridge in Van Goghs Starry Night style using neural style transfer'
					src={'/assets/hero_img_dark.png'}
					rounded={'2rem'}
					shadow={'2xl'}
				/>
			</MotionBox>
		</>
	);
};

export default Home;
