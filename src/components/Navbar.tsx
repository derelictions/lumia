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
	const variant = useBreakpointValue({ lg: 'lg', base: 'base' });
	const bg = useColorModeValue('gray.50', 'gray.700');
	// const [isDark, setIsDark] = useState(false);
	return variant === 'lg' ? (
		<Flex
			p={4}
			margin-down={4}
			backgroundColor={bg}
			// as={'header'}
			position={'fixed'}
			top={0}
			// wrap={'wrap'} // TODO: figure out what to do with this.
			left={0}
			right={0}
			as={'nav'}
			mb={8}
			zIndex={1}
		>
			<Logo />
			<Spacer />
			<MenuList variant={variant} />
		</Flex>
	) : (
		<VStack
			// direction={'row'}
			align={'stretch'}
			p={4}
			margin-down={4}
			backgroundColor={bg}
			as={'header'}
			mb={8}
			position={'fixed'}
			top={0}
			zIndex={1}
			right={0}
			left={0}
		>
			<Flex align={'center'}>
				<Logo />
				<Spacer />
				<MenuButton isOpen={isOpen} onOpen={onToggle} />
			</Flex>
			<Box display={isOpen ? 'block' : 'none'}>
				<MenuList variant={variant} />
			</Box>
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
	return variant === 'base' ? (
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
