import router from 'next/router';
import React, { Props } from 'react';
import { AppProps } from 'next/app';
import { Box, Text, Image, Stack, HStack, Link } from '@chakra-ui/react';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
} from '@chakra-ui/icons';

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

export default function Navbar({}) {
	return (
		<HStack>
			<Logo />
		</HStack>
	);
}

// Logo component

function Logo({}) {
	return (
		<HStack>
			<Image w='50px' src='/altl.png' alt='Lumia' />
			<Text fontSize='lg' fontWeight='bold'>
				Lumia
			</Text>
		</HStack>
	);
}

// Drop down button for toggling menu on phone and tablet

function MenuToggle({ toggle, isOpen }: any) {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <TriangleDownIcon />}
		</Box>
	);
}

// For dark and light theme

function ThemeToggle({ toggle, isOpen }: any) {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <MoonIcon /> : <SunIcon />}
		</Box>
	);
}

// TODO: stack depeneding on responsive breakpts

function Header({}) {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return <MenuToggle toggle={toggle} isOpen={isOpen} />;
}

function MenuItem({ children, isLast, to = '/', ...rest }: any) {
	return (
		<Link onClick={() => router.push(to)}>
			<Text display='block' {...rest}>
				{children}
			</Text>
		</Link>
	);
}

// We create responsive breakpoints with the Stack component
