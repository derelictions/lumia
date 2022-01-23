import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { variant } from '../types';
import { Flex, useBreakpointValue, Spacer } from '@chakra-ui/react';
import Home from '../components/Home';

const smVariant: variant = { navigation: 'base', navigationButton: true };
const mdVariant: variant = { navigation: 'md', navigationButton: false };
const lgVariant: variant = { navigation: 'lg', navigationButton: true };
export default function home() {
	const variants = useBreakpointValue({
		base: smVariant,
		md: mdVariant,
		lg: lgVariant,
	});
	return (
		<div>
			<Flex
				flexDirection={'column'}
				maxWidth={['auto', 'auto', 'auto', '1200px']}
				margin={'0 auto'}
				minH={'100vh'}
				align={'center'}
				justify={'space-between'}
			>
				<Navbar />
				<main>
					<Home />
				</main>
				<Footer />
			</Flex>
		</div>
	);
}
