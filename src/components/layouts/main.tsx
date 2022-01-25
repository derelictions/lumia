import { FunctionComponent } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Flex } from '@chakra-ui/react';

const Layout: FunctionComponent<{}> = ({ children }) => {
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
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Flex>
		</div>
	);
};

export default Layout;
