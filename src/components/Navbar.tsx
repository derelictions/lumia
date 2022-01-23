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
	Container,
	filter,
	useColorModeValue,
	useColorMode,
	Collapse,
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

interface MButtonProps {
	isOpen: boolean;
	onOpen: () => void;
}

interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
	to: string;
}

interface MenuListProps extends React.HTMLAttributes<HTMLElement> {
	variant: string | undefined;
}

const Navbar: FunctionComponent<{}> = ({}) => {
	const { isOpen, onToggle } = useDisclosure();
	const variant = useBreakpointValue({
		lg: 'lg',
		base: 'base',
		md: 'md',
		sm: 'sm',
	});
	const bg = useColorModeValue('gray.50', 'gray.700');

	return variant === 'lg' ? (
		<Flex
			p={2}
			backgroundColor={bg}
			position={'sticky'}
			width={'100vw'}
			top={0}
			left={0}
			right={0}
			as={'header'}
			zIndex={1}
			align={'center'}
		>
			<Logo />
			<Spacer />
			<MenuList variant={variant} />
			<ColorButton />
		</Flex>
	) : (
		<VStack
			align={'stretch'}
			p={2}
			marginBottom={6}
			backgroundColor={bg}
			as={'header'}
			position={'sticky'}
			width={'100vw'}
			top={0}
			zIndex={1}
			right={0}
			left={0}
			roundedBottom={isOpen ? 'md' : '0'}
		>
			<Flex align={'center'}>
				<Logo />
				<Spacer />
				<ColorButton />
				<MenuButton isOpen={isOpen} onOpen={onToggle} />
			</Flex>
			<Collapse in={isOpen}>
				<MenuList variant={variant} />
			</Collapse>
		</VStack>
	);
};
export default Navbar;

const Logo: FunctionComponent = ({}) => {
	return (
		<HStack cursor={'pointer'}>
			<Image w='50px' src='/assets/altl.png' alt='Lumia' />
			<Text fontSize='lg' fontWeight='bold'>
				Lumia
			</Text>
		</HStack>
	);
};

const MenuButton: FunctionComponent<MButtonProps> = ({ isOpen, onOpen }) => {
	return (
		<Box>
			<Button onClick={onOpen}>
				{isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
			</Button>
		</Box>
	);
};

const MenuItem1: FunctionComponent<MenuItemProps> = ({
	children,
	to,
	...rest
}) => {
	return (
		<Link href={to}>
			<Text display='block' {...rest}>
				{children}
			</Text>
		</Link>
	);
};

const MenuList: FunctionComponent<MenuListProps> = ({ variant }) => {
	const color = useColorModeValue('gray.200', 'gray.800');
	const kids = [
		// eslint-disable-next-line react/jsx-key
		<MenuItem1 to='/'>About</MenuItem1>,
		// eslint-disable-next-line react/jsx-key
		<MenuItem1 to='/'>How it works?</MenuItem1>,
		// eslint-disable-next-line react/jsx-key
		<MenuItem1 to='/'>Top List</MenuItem1>,
		// eslint-disable-next-line react/jsx-key
		<MenuItem1 to='/'>
			<Button>Log in</Button>
		</MenuItem1>,
	];
	return variant === 'base' ? (
		<VStack
			spacing={4}
			padding={4}
			rounded={4}
			background={color}
			align={'center'}
		>
			{kids}
		</VStack>
	) : (
		<HStack
			spacing={4}
			rounded={4}
			padding={2}
			justify={'space-around'}
			background={variant !== 'lg' ? color : undefined}
		>
			{kids}
		</HStack>
	);
};

const ColorButton: FunctionComponent<{}> = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box paddingRight={2}>
			<Button onClick={toggleColorMode}>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>
		</Box>
	);
};
