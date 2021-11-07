import Head from 'next/head';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { variant } from '../types';
import { useBreakpointValue } from '@chakra-ui/react';
import Home from '../component/Home';

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
			<Navbar variant={variants} />
			<main>
				<Home variant={variants} />
			</main>
			<footer>
				<Footer variant={variants} />
			</footer>
		</div>
	);
}
