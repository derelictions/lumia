import React, { useState } from 'react';
// import { useAuth } from '../lib/auth';
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	// useColorModeValue,
	Text,
	// useToast,
} from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginCard = () => {
	return (
		<Stack spacing={4}>
			<FormControl id='email'>
				<FormLabel>Email address</FormLabel>
				<Input type='email' />
			</FormControl>
			<FormControl id='password'>
				<FormLabel>Password</FormLabel>
				<Input type='password' />
			</FormControl>
			<Stack spacing={10}>
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					align={'start'}
					justify={'space-between'}
				>
					<Link color={'blue.400'}>Forgot password?</Link>
				</Stack>
				<Button
					bg={'blue.400'}
					color={'white'}
					_hover={{
						bg: 'blue.500',
					}}
				>
					Sign in
				</Button>
			</Stack>
			<Stack pt={6}>
				<Text align={'center'}>
					Not a user?{' '}
					<Link href='/signup' color={'blue.400'}>
						Signup
					</Link>
				</Text>
			</Stack>
		</Stack>
	);
};

export default function LoginPage() {
	// const router = useRouter();
	// const toast = useToast();
	// const { user, authService } = useAuth();
	return (
		<Flex minH={'80vh'} minW={'auto'} align={'center'} justify={'center'}>
			<Stack spacing={6} mx={'auto'} maxW={'lg'} py={10} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in now</Heading>
				</Stack>
				<LoginCard />
				{/* <Box rounded={'lg'} boxShadow={'lg'} p={6}></Box> */}
			</Stack>
		</Flex>
	);
}

// <Stack> // 	<Heading>Login</Heading>
// 	<Box>
// 		<Button
// 			onClick={() => {
// 				authService
// 					.signInWithGoogle()
// 					.then((result: any) => {
// 						console.log(result);
// 						router.push('/home');
// 					})
// 					.catch((error: { message: any }) => {
// 						toast({
// 							title: 'Error',
// 							description: error.message,
// 							status: 'error',
// 							duration: 9000,
// 							isClosable: true,
// 						});
// 					});
// 			}}
// 		>
// 			Sign in with redirect
// 		</Button>
// 		<Button
// 			onClick={() =>
// 				authService.signOut().then(() => {
// 					console.log('Logged out successfully');
// 					router.push('/');
// 				})
// 			}
// 		>
// 			Logout
// 		</Button>
// 	</Box>
// </Stack>
