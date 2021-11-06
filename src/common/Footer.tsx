import {
	Box,
	chakra,
	Container,
	Stack,
	VStack,
	Text,
	useColorModeValue,
	VisuallyHidden,
	Button,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';
import { variant } from '../types';

interface MainProps {
	variant: variant | undefined;
}

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
// TODO: add variant and delegate to top level
const Footer: React.FunctionComponent<MainProps> = ({ children, variant }) => {
	const bg = useColorModeValue('gray.50', 'gray.700');
	return (
		<Box
			as='footer'
			backgroundColor={bg}
			padding={8}
			position={'relative'}
			bottom={0}
			left={0}
			right={0}
			zIndex={1}
		>
			{/* <Container maxW={}> */}
			<Container
				as={Stack}
				direction={variant?.navigation === 'base' ? 'column' : 'row'}
				align={'center'}
				justify={'space-between'}
				spacing={4}
			>
				<Text>© 2021 Omar. All rights reserved</Text>
				<Stack
					// align={'center'}
					// justify={'space-between'}
					direction={'row'}
					spacing={8}
				>
					<SocialButton
						href={'https://www.instagram.com/'}
						label={'Instagram'}
					>
						<FaInstagram />
					</SocialButton>
					<SocialButton
						href={'https://www.twitter.com'}
						label={'Twitter'}
					>
						<FaTwitter />
					</SocialButton>
					<SocialButton
						href={'https://www.github.com/'}
						label={'Github'}
					>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
