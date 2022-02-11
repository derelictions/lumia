import React from 'react';
import { authService } from '../lib/auth';
import { Box, Button, Heading, Stack, useToast } from '@chakra-ui/react';

export default function LoginPage() {
	const toast = useToast();
	return (
		<Stack>
			<Heading>Login</Heading>
			<Box>
				<Button
					onclick={() => {
						authService
							.signInWithGoogle()
							.then(() => {})
							.catch((error) => {});
					}}
				>
					Sign in with redirect
				</Button>
			</Box>
		</Stack>
	);
}
