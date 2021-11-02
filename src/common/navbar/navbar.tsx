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

import { variant } from '../../types';

// const Navbar: React.FC<{}> = () => {
//     const router = useRouter();

//     return (
//         <>
//             <Flex justify="space-between" m={4}>
//                 <Heading onClick={() => router.push('/')} as="button">
//                     Lumia
//                 </Heading>
//             </Flex>
//         </>
//     )

// }

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

const smVariant: variant = { navigation: 'base', navigationButton: true };
const mdVariant: variant = { navigation: 'md', navigationButton: false };
const lgVariant: variant = { navigation: 'lg', navigationButton: true };

const Navbar: FunctionComponent = ({}) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(!isOpen);
	const variants = useBreakpointValue({
		base: smVariant,
		md: mdVariant,
		lg: lgVariant,
	});
	const [isDark, setIsDark] = useState(false);
	if (variants?.navigation === 'lg') {
		return (
			<Flex>
				<Logo />
				<Spacer />
				<MenuList variant={variants} />
			</Flex>
		);
	} else {
		return (
			<VStack align='stretch'>
				<Flex>
					<Logo />
					<Spacer />
					<MenuButton isOpen={isOpen} onOpen={onOpen} />
				</Flex>
				<Box display={isOpen ? 'block' : 'none'}>
					<MenuList variant={variants} />
				</Box>
			</VStack>
		);
	}
};
export default Navbar;

const Logo: FunctionComponent = ({}) => {
	return (
		<HStack>
			<Image w='50px' src='/assets/altl.png' alt='Lumia' />
			<Text fontSize='lg' fontWeight='bold'>
				Lumia
			</Text>
		</HStack>
	);
};

const MenuButton: FunctionComponent<MButtonProps> = ({ isOpen, onOpen }) => {
	return (
		<Box onClick={onOpen}>
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
		<MenuItem1 to='/'>Home</MenuItem1>,
		<MenuItem1 to='/'>About</MenuItem1>,
		<MenuItem1 to='/'>Top List</MenuItem1>,
		<MenuItem1 to='/'>
			<Button>Sign Up</Button>
		</MenuItem1>,
	];
	return variant?.navigation === 'base' ? (
		<VStack align={'center'}>{kids}</VStack>
	) : (
		<HStack justify={'space-around'}>{kids}</HStack>
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
