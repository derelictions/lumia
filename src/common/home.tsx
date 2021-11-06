import router from 'next/router';
import React, { FunctionComponent, HTMLAttributes, useState } from 'react';
import { AppProps } from 'next/app';
import {
	Box,
	Text,
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

// home page component for the application
const Home: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
	return <Box></Box>;
};

export default Home;
