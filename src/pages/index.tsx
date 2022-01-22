import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { variant } from '../types';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
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
				// wrap={'wrap'}
				// flexDirection={'column'}
				// maxWidth={variants?.navigation === 'lg' ? '1200px' : 'auto'}
				maxWidth={['auto', 'auto', 'auto', '1200px']}
				margin={'0 auto'}
				// direction={'row'}
				// Flex={1}
				align='center'
			>
				<Navbar />
				<main>
					<Home />
				</main>
			</Flex>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
