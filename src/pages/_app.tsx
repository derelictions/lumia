import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layouts/main';
import { AuthProvider } from '../lib/auth';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<AnimatePresence exitBeforeEnter initial={true}>
					<AuthProvider>
						<Component {...pageProps} key={router.route} />
					</AuthProvider>
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
