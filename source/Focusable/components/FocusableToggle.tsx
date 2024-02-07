import React, {FC, ReactNode, createContext, useContext, useState} from 'react';
import {Box, Text, useInput} from 'ink';
import useFocusable from '../hooks/useFocusable.js';

const FocusableToggleContext = createContext<[boolean, () => void]>([
	true,
	() => {},
]);
const FocusableToggle: FC<{children: ReactNode; initialValue?: boolean}> = ({
	children,
	initialValue = false,
}) => {
	const [value, setValue] = useState(initialValue);
	const toggleValue = () => setValue(!value);
	return (
		<FocusableToggleContext.Provider value={[value, toggleValue]}>
			{children}
		</FocusableToggleContext.Provider>
	);
};

const useFocusableToggle = () => {
	return useContext(FocusableToggleContext);
};

const FocusableToggleContent: FC<{
	children: (isOpen: boolean) => ReactNode;
}> = ({children}) => {
	const [isOpen] = useFocusableToggle();
	return (
		<Box
			marginLeft={4}
			paddingLeft={2}
			borderLeft={true}
			borderRight={false}
			borderTop={false}
			borderBottom={false}
			borderStyle={'bold'}
			borderLeftColor={'blue'}
		>
			<Text>{children(isOpen)}</Text>
		</Box>
	);
};

const FocusableToggleTrigger: FC<{
	children: (isOpen: boolean) => ReactNode;
}> = ({children}) => {
	const [isOpen, toggle] = useFocusableToggle();
	const {isFocused, withFocus} = useFocusable(true);

	useInput((_input, key) => {
		if (key.return && isFocused) {
			toggle();
		}
	});
	return withFocus(<>{children(isOpen)}</>);
};

export default {
	Context: FocusableToggle,
	Trigger: FocusableToggleTrigger,
	Content: FocusableToggleContent,
};
