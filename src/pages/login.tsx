import React from 'react';
import { auth } from '../lib/firebase';
import { Box, Button, Heading, Stack, useToast } from '@chakra-ui/react';

export default function LoginPage() {
	const provider = new GoogleAuthProvider();
	const toast = useToast();
	return (
		<Stack>
			<Heading>Login</Heading>
			<Box>
				<Button>Sign in with redirect</Button>
			</Box>
		</Stack>
	);
}
