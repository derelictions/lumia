import Head from 'next/head';
import Navbar from '../common/navbar';
import Footer from '../common/Footer';
import { variant } from '../types';
import { useBreakpointValue } from '@chakra-ui/react';

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
			<main></main>
			<footer>
				<Footer variant={variants} />
			</footer>
		</div>
	);
}
