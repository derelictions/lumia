import React from 'react';
import { auth } from '../lib/firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithRedirect,
	GoogleAuthProvider,
	getRedirectResult,
} from 'firebase/auth';
import { Box, Button, Heading, Stack, useToast } from '@chakra-ui/react';

export default function LoginPage() {
	const provider = new GoogleAuthProvider();
	const toast = useToast();
	return (
		<Stack>
			<Heading>Login</Heading>
			<Box>
				<Button
					onClick={async () => {
						await signInWithRedirect(auth, provider);
						await getRedirectResult(auth)
							.then((result) => {
								if (result && result.user) {
									window.location.href = '/';
								}
							})
							.catch((error) => {
								toast({
									title: 'Error',
									description: error.message,
									status: 'error',
									duration: 9000,
									isClosable: true,
								});
							});
					}}
				>
					Sign in with redirect
				</Button>
			</Box>
		</Stack>
	);
}
