import type { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} key={router.route} />
		</ChakraProvider>
	);
}
export default MyApp;
