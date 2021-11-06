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
	const items = [
		[
			'A new way to create art',
			'transfer and combine styles between your favorite artists, scenes and pictures',
		],
		['', 'use '],
		['Contact', '/contact'],
	];
	return (
		//flex
		<Flex
			direction='column'
			align='center'
			justify='center'
			height='100vh'
			// backgroundColor='gray.50'
		>
			<Stack spacing={8}>
				<Heading color={'#7df9ff'} as={'h2'}>
					a new way to create art...
				</Heading>
				<Text>
					transfer and combine styles between your favorite artists,
					scenes and pictures. go as crazy as you want!
				</Text>
			</Stack>
		</Flex>
	);
};

export default Home;
