import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
} from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';

interface Props {
	setIsDark: Dispatch<SetStateAction<boolean>>;
	isDark: boolean;
}

const BarContent: FunctionComponent<Props> = ({ setIsDark, isDark }) => {
	return (
		<Button
			leftIcon={isDark ? <MoonIcon /> : <SunIcon />}
			onClick={() => setIsDark(!isDark)}
		>
			{isDark ? 'DARK' : 'LIGHT'}
		</Button>
		// <Box onClick={() => setIsDark(!isDark)}>

		// 	{isDark ? <MoonIcon /> : <SunIcon />}
		// </Box>
	);
};

export default BarContent;
