import { useColorModeValue, Heading } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

export default function C404() {
	const headerColor = useColorModeValue(
		'linear(to-l, pink.400, purple.400)',
		'linear(to-l, cyan.300, blue.300)'
	);
	return (
		<Heading as={'h1'} bgGradient={headerColor} bgClip={'text'}>
			404
		</Heading>
	);
}
