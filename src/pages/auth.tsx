import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Stack,
	Text,
	useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

interface AuthProps {
	children: React.ReactNode;
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthCard = ({ isLogin, setIsLogin }: AuthProps) => {
	const toast = useToast();
	const router = useRouter();
	const { user, authService } = useAuth();
	console.log(user);
	const [showPassword, setShowPassword] = useState(false);
	return (
		<Stack spacing={4}>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					console.log(`Attempting validation for ${JSON.stringify(values)}`);
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					if (!values.password) {
						errors.password = 'Required';
					}
					return errors;
				}}
				onSubmit={(
					values: { email: any; password: any },
					{ setSubmitting }: any
				) => {
					const call = isLogin
						? async () =>
								authService.LogInWithEmailAndPassword(
									values.email,
									values.password
								)
						: async () =>
								authService.signUpWithEmailAndPassword(
									values.email,
									values.password
								);
					return call()
						.then(() => {
							setSubmitting(false);
							router.push('/');
						})
						.catch((error: { message: any }) => {
							console.log(error);
							setSubmitting(false);
							toast({
								title: 'Error',
								description: error.message,
								status: 'error',
								duration: 9000,
							});
						});
				}}
			>
				{({ handleSubmit, isSubmitting, values, errors }) => (
					<Form onSubmit={handleSubmit}>
						<Field name='email'>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.email} isRequired>
									<FormLabel htmlFor='email'>Email address</FormLabel>
									<Input
										{...field}
										id='email'
										placeholder='Email'
										type='email'
									/>
									<FormErrorMessage>{form.errors.name}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name={'password'}>
							{({ field, form }) => (
								<FormControl id='password' isRequired>
									<FormLabel>Password</FormLabel>
									<InputGroup>
										<Input
											{...field}
											id='password'
											placeholder='********'
											placeContent={'password'}
											type={showPassword ? 'text' : 'password'}
										/>
										{!isLogin && (
											<InputRightElement h={'full'}>
												<Button
													variant={'ghost'}
													onClick={() => setShowPassword((v) => !v)}
												>
													{showPassword ? <ViewIcon /> : <ViewOffIcon />}
												</Button>
											</InputRightElement>
										)}
									</InputGroup>
								</FormControl>
							)}
						</Field>
						<Stack spacing={10} pt={6}>
							<Button
								type='submit'
								loadingText='Submitting'
								isLoading={isSubmitting}
								size='lg'
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							>
								{isLogin ? 'Log In' : 'Sign Up'}
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'}>
								{isLogin ? 'Not' : 'Already'} a user?{' '}
								<Link onClick={() => setIsLogin(!isLogin)} color={'blue.400'}>
									{isLogin ? 'Sign Up' : 'Login'}
								</Link>
							</Text>
						</Stack>
					</Form>
				)}
			</Formik>
		</Stack>
	);
};

const LoginCard = () => {};

export default function AuthPage() {
	const [isLogin, setIsLogin] = useState(false);
	const { authService } = useAuth();
	const router = useRouter();
	const toast = useToast();

	return (
		<Flex
			minH={'80vh'}
			direction={['column', 'column', 'row']}
			minW={'auto'}
			align={'center'}
			justify={['center', 'center', 'space-between']}
		>
			<Stack
				spacing={6}
				mx={'auto'}
				minW={['sm', 'sm', 'sm', 'md']}
				maxW={'lg'}
				py={10}
				px={6}
			>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>
						{isLogin ? 'Login now' : 'Sign up now'}
					</Heading>
				</Stack>
				<AuthCard isLogin={isLogin} setIsLogin={setIsLogin} />
			</Stack>
			<Stack
				spacing={6}
				mx={'auto'}
				minW={['sm', 'md']}
				maxW={'lg'}
				py={10}
				align={'center'}
				px={6}
			>
				<Stack align={'center'}>
					<Heading fontSize={'2xl'}>Or </Heading>
				</Stack>
				<Button
					w={'xs'}
					maxW={'sm'}
					variant={'outline'}
					leftIcon={<FcGoogle />}
					onClick={() =>
						authService.signInWithGoogle().then(() =>
							router.push('/').catch((error) => {
								toast({
									title: 'Error',
									description: error.message,
									status: 'error',
									duration: 9000,
								});
							})
						)
					}
				>
					<Center>
						<Text>Sign in with Google</Text>
					</Center>
				</Button>
			</Stack>
		</Flex>
	);
}
