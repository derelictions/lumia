import React, { FunctionComponent } from 'react';
import {
	Box,
	Text,
	Heading,
	Image,
	Stack,
	Flex,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';

// import NextImage from 'next/image';
// import { motion } from 'framer-motion';
// const MotionBox = motion(Box);

const HomeContent: FunctionComponent<{}> = () => {
	// TODO: figure out how to optimize the image using NEXT
	const headerColor = useColorModeValue(
		'linear(to-l, pink.400, purple.400)',
		'linear(to-l, cyan.300, blue.300)'
	);
	return (
		<>
			<Stack
				spacing={[4, 8]}
				w={{ base: '80%', md: '40%' }}
				pt={4}
				pb={6}
				pl={{ md: 8 }}
			>
				<Heading bgGradient={headerColor} bgClip={'text'} as={'h2'}>
					a new way to create art...
				</Heading>
				<Text fontSize={'xl'}>
					transfer and combine styles between your favorite artists, scenes and
					pictures. go as crazy as you want!
				</Text>
				<>
					<Text display='block'>
						<Button>Join now</Button>
					</Text>
				</>
				<Text fontSize={'md'}>Data collected from art work maybe mined.</Text>
			</Stack>
			{/* <MotionBox
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				align={'center'}
				display={'block'}
			> */}
			<Box align={'center'} display={'block'}>
				<Image
					w={['80%', '80%', '80%', '100%']}
					alt='Golden gate bridge in Van Goghs Starry Night style using neural style transfer'
					src={'/assets/hero_img_dark.png'}
					rounded={'2rem'}
					shadow={'2xl'}
				/>
			</Box>
			{/* </MotionBox> */}
		</>
	);
};

const Home: FunctionComponent<{}> = () => {
	return (
		<Flex maxWidth={{ lg: '1200px' }}>
			<Stack
				direction={['column-reverse', 'column-reverse', 'row']}
				justify={['center', 'center', 'space-around']}
				align={'center'}
			>
				<HomeContent />
			</Stack>
		</Flex>
	);
};
export default Home;
