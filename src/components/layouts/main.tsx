import { FunctionComponent } from 'react';
import { Router } from 'next/router';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Flex } from '@chakra-ui/react';

interface LayoutProps {
	router: Router;
}

const Layout: FunctionComponent<LayoutProps> = ({ router, children }) => {
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
				<Navbar path={router.asPath} />
				<main>{children}</main>
				<Footer />
			</Flex>
		</div>
	);
};

export default Layout;
