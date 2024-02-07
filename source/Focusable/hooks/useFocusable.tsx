import React from 'react';
import {Text, useFocus} from 'ink';

const useFocusable = (isActive = true) => {
	const {isFocused} = useFocus({isActive, autoFocus: true});
	const props = {
		underline: isFocused,
		color: isFocused ? 'yellow' : undefined,
	};

	return {
		isFocused,
		withFocus: (children: JSX.Element) => (
			<Text {...props}>
				{isFocused && <>&#8594;</>} {children}
			</Text>
		),
	};
};

export default (isActive?: boolean) => useFocusable(isActive);
