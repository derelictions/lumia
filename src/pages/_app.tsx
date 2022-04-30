import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layouts/main';
import { AuthProvider } from '../lib/auth';

// const noAuthRequired = ['/', '/login', '/about'];

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AuthProvider>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Layout>
						<Component {...pageProps} key={router.route} />
					</Layout>
				</AnimatePresence>
			</AuthProvider>
		</ChakraProvider>
	);
}
export default MyApp;
