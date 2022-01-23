import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Flex } from '@chakra-ui/react';
import Home from '../components/Home';

export default function home() {
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
				<main>
					<Home />
				</main>
				<Footer />
			</Flex>
		</div>
	);
}
