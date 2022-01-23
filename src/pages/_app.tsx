import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence exitBeforeEnter initial={true}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ChakraProvider>
	);
}
export default MyApp;
