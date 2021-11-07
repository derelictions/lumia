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
interface MButtonProps {
	isOpen: boolean;
	onOpen: () => void;
}

interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
	// children: FunctionComponent;
	// isLast: boolean;
	to: string;
}

interface MenuListProps extends React.HTMLAttributes<HTMLElement> {
	variant: variant | undefined;
}

interface MainProps {
	variant: variant | undefined;
}

const Navbar: FunctionComponent<MainProps> = ({ variant }) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const bg = useColorModeValue('gray.50', 'gray.700');
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(!isOpen);
	const [isDark, setIsDark] = useState(false);
	// move props here
	if (variant?.navigation === 'lg') {
		return (
			<Flex
				p={4}
				margin-down={4}
				backgroundColor={bg}
				as={'header'}
				position={'fixed'}
				top={0}
				left={0}
				right={0}
				zIndex={1}
			>
				<Logo />
				<Spacer />
				<MenuList variant={variant} />
			</Flex>
		);
	} else {
		return (
			<VStack
				align={'stretch'}
				p={4}
				margin-down={4}
				backgroundColor={bg}
				as={'header'}
				position={'fixed'}
				top={0}
				zIndex={1}
			>
				<Flex align={'center'}>
					<Logo />
					<Spacer />
					<MenuButton isOpen={isOpen} onOpen={onOpen} />
				</Flex>
				<Box display={isOpen ? 'block' : 'none'}>
					<MenuList variant={variant} />
				</Box>
			</VStack>
		);
	}
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
		<Box onClick={onOpen} cursor='pointer'>
			{isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
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
	const kids = [
		// <MenuItem1 to='/'>Home</MenuItem1>,
		<MenuItem1 to='/'>About</MenuItem1>,
		<MenuItem1 to='/'>How it works?</MenuItem1>,
		<MenuItem1 to='/'>Top List</MenuItem1>,
		<MenuItem1 to='/'>
			<Button>Log in</Button>
		</MenuItem1>,
	];
	return variant?.navigation === 'base' ? (
		<VStack spacing={4} padding={4} align={'center'}>
			{kids}
		</VStack>
	) : (
		<HStack spacing={4} justify={'space-around'}>
			{kids}
		</HStack>
	);
};

// function ThemeToggle({ toggle, isOpen }: any) {
// 	return (
// 	);
// }

/*
		<Button
			leftIcon={isDark ? <MoonIcon /> : <SunIcon />}
			onClick={() => setIsDark(!isDark)}
		>
			{isDark ? 'DARK' : 'LIGHT'}
		</Button>
*/
