import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue,
	Button,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

interface SocialProps extends React.HTMLAttributes<HTMLElement> {
	href: string;
	label: string;
}

const SocialButton: React.FunctionComponent<SocialProps> = ({
	children,
	label,
	href,
	...rest
}) => {
	return (
		<Button
			as='a'
			href={href}
			rounded={'full'}
			justify-content={'center'}
			{...rest}
		>
			{children}
		</Button>
	);
};

const Footer: React.FunctionComponent<{}> = () => {
	const bg = useColorModeValue('gray.50', 'gray.700');
	return (
		<Box
			as={'footer'}
			backgroundColor={bg}
			padding={4}
			bottom={0}
			width={'100vw'}
		>
			<Container
				as={Stack}
				direction={['column', 'row']}
				align={'center'}
				justify={'space-between'}
				spacing={4}
			>
				<Text>© 2021 Omar. All rights reserved</Text>
				<Stack direction={'row'} spacing={8}>
					<SocialButton href={'https://www.instagram.com/'} label={'Instagram'}>
						<FaInstagram />
					</SocialButton>
					<SocialButton href={'https://www.twitter.com'} label={'Twitter'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton href={'https://www.github.com/'} label={'Github'}>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
