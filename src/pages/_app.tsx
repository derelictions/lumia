import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layouts/main';
import { AuthProvider } from '../lib/auth';
import ProtectedRoute from '../components/ProtectedRoute';

const noAuthRequired = ['/', '/auth', '/about'];

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AuthProvider>
			<ChakraProvider theme={theme}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Layout>
						{noAuthRequired.includes(router.pathname) ? (
							<Component {...pageProps} key={router.route} />
						) : (
							<ProtectedRoute>
								<Component {...pageProps} key={router.route} />
							</ProtectedRoute>
						)}
					</Layout>
				</AnimatePresence>
			</ChakraProvider>
		</AuthProvider>
	);
}
export default MyApp;
