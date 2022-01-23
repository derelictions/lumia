import React, { FunctionComponent } from 'react';
import {
	Box,
	Text,
	Image,
	HStack,
	Link,
	useDisclosure,
	Flex,
	Spacer,
	useBreakpointValue,
	Button,
	VStack,
	useColorModeValue,
	useColorMode,
	Collapse,
} from '@chakra-ui/react';
import { TriangleDownIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';

interface MButtonProps {
	isOpen: boolean;
	onOpen: () => void;
}

interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
	to: string;
	path: string;
}

interface MenuListProps extends React.HTMLAttributes<HTMLElement> {
	variant: string | undefined;
	path: string;
	isOpen: boolean;
}

interface NavProps extends React.HTMLAttributes<HTMLElement> {
	path: string;
}

const MotionImage = motion(Image);
const Logo: FunctionComponent = () => {
	return (
		<HStack cursor={'pointer'}>
			<MotionImage
				animate={{ rotate: 360 }}
				transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
				w='50px'
				src='/assets/altl.png'
				alt='Lumia'
			/>
			<Text fontSize='lg' fontWeight='bold'>
				Lumia
			</Text>
		</HStack>
	);
};

const mbvariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
};

const MotionBox = motion(Box);

const MenuButton: FunctionComponent<MButtonProps> = ({ isOpen, onOpen }) => {
	return (
		<MotionBox animate={isOpen ? 'open' : 'closed'} variants={mbvariants}>
			<Button onClick={onOpen}>
				<TriangleDownIcon />
			</Button>
		</MotionBox>
	);
};

const NavItem: FunctionComponent<NavItemProps> = ({
	children,
	to,
	path,
	...rest
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const active = to === path;
	return (
		<Link href={to}>
			<Text display='block' {...rest}>
				{children}
			</Text>
		</Link>
	);
};

const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const NavListVariants = {
	open: {
		scale: 1,
	},
	closed: {
		scale: 0.8,
	},
};

const MenuList: FunctionComponent<MenuListProps> = ({ variant, path }) => {
	const color = useColorModeValue('gray.200', 'gray.800');
	const bp = useBreakpointValue({
		base: 'base',
		md: 'md',
		lg: 'lg',
		xl: 'xl',
		sm: 'base',
	});
	const kids = (
		<>
			<NavItem to='/' path={path}>
				About
			</NavItem>
			<NavItem to='/' path={path}>
				How it works?
			</NavItem>
			<NavItem to='/' path={path}>
				Top List
			</NavItem>
			<NavItem to='/' path={path}>
				<Button>Log in</Button>
			</NavItem>
		</>
	);

	const sharedProps = {
		variants: NavListVariants,
		transition: { duration: 0.8 },
		spacing: 4,
		rounded: 4,
	};

	return bp === 'base' ? (
		<MotionVStack
			padding={4}
			background={color}
			align={'center'}
			{...sharedProps}
		>
			{kids}
		</MotionVStack>
	) : (
		<MotionHStack
			padding={2}
			justify={'space-around'}
			background={variant !== 'lg' ? color : undefined}
			{...sharedProps}
		>
			{kids}
		</MotionHStack>
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
const Navbar: FunctionComponent<NavProps> = ({ path }) => {
	const { isOpen, onToggle } = useDisclosure();
	const variant = useBreakpointValue({
		lg: 'lg',
		base: 'base',
		md: 'md',
		sm: 'sm',
		xl: 'lg',
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
			<MenuList variant={variant} path={path} isOpen={true} />
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
			{/* <Collapse in={isOpen}> */}
			<MotionBox
				initial={'closed'}
				transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
				variants={{
					open: { opacity: 1, height: 'auto' },
					closed: { opacity: 0, height: 0 },
				}}
				animate={isOpen ? 'open' : 'closed'}
			>
				<MenuList variant={variant} path={path} isOpen={isOpen} />
			</MotionBox>
			{/* </Collapse> */}
		</VStack>
	);
};

export default Navbar;
