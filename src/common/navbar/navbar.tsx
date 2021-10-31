import router from 'next/router';
import React, { FunctionComponent, useState } from 'react';
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
} from '@chakra-ui/react';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
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

import Sidebar from './sidebar';
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

interface Props {}

const smVariant: variant = { navigation: 'drawer', navigationButton: true };
const mdVariant: variant = { navigation: 'sidebar', navigationButton: false };

const Navbar: FunctionComponent<Props> = ({}) => {
	// const [isOpen, setIsOpen] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
	const [isDark, setIsDark] = useState(false);
	return (
		<Flex>
			<Logo />
			<Spacer />
			<Button
				leftIcon={<TriangleDownIcon />}
				onClick={onOpen}
				display={{ md: 'none' }}
			>
				Menu
			</Button>

			<Sidebar
				variant={variants}
				isOpen={isOpen}
				onClose={onClose}
			></Sidebar>
		</Flex>
	);
};

export default Navbar;

function Logo({}) {
	return (
		<HStack>
			<Image w='50px' src='/assets/altl.png' alt='Lumia' />
			<Text fontSize='lg' fontWeight='bold'>
				Lumia
			</Text>
		</HStack>
	);
}

// Drop down button for toggling menu on phone and tablet

// For dark and light theme

// function ThemeToggle({ toggle, isOpen }: any) {
// 	return (
// 	);
// }

// TODO: stack depeneding on responsive breakpts

// function Header({}) {
// 	const [isOpen, setIsOpen] = React.useState(false);
// 	const toggle = () => setIsOpen(!isOpen);

// 	return <MenuToggle toggle={toggle} isOpen={isOpen} />;
// }

// function MenuItem({ children, isLast, to = '/', ...rest }: any) {
// 	return (
// 		<Link onClick={() => router.push(to)}>
// 			<Text display='block' {...rest}>
// 				{children}
// 			</Text>
// 		</Link>
// 	);
// }

// We create responsive breakpoints with the Stack component
