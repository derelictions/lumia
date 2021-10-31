import React, { FunctionComponent, useState } from 'react';

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
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { isDark } from '../../../node_modules/@chakra-ui/theme-tools/dist/types';
import { variant } from '../../types';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
} from '@chakra-ui/icons';
import BarContent from './barcontent';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	variant: variant | undefined;
}

const Sidebar: FunctionComponent<Props> = ({ isOpen, onClose, variant }) => {
	const [isDark, setIsDark] = useState(false);
	return variant?.navigation === 'drawer' ? (
		<Drawer onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>{`Menu`}</DrawerHeader>
				<DrawerBody>
					<BarContent setIsDark={setIsDark} isDark={isDark} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	) : (
		<Box position='fixed' right={0} p={5} w='200px' top={0} h='100%' bg=''>
			<BarContent setIsDark={setIsDark} isDark={isDark} />
		</Box>
	);
};

export default Sidebar;
