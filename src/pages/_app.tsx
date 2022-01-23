import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layouts/main';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
