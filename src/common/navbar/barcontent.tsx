import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import {
	CloseIcon,
	TriangleDownIcon,
	SunIcon,
	MoonIcon,
} from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

interface Props {
	setIsDark: Dispatch<SetStateAction<boolean>>;
	isDark: boolean;
}

const BarContent: FunctionComponent<Props> = ({ setIsDark, isDark }) => {
	return (
		<Box onClick={() => setIsDark(!isDark)}>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</Box>
	);
};

export default BarContent;
