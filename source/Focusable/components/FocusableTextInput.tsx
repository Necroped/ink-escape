import React, {FC, ReactNode, useState} from 'react';
import TextInput from 'ink-text-input';
import useFocusable from '../hooks/useFocusable.js';

const FocusableTextInput: FC<{
	children: ReactNode;
	isActive?: boolean;
	onSubmit: (val: string) => boolean;
}> = ({children, isActive = true, onSubmit}) => {
	const noop = () => {};
	const [value, setValue] = useState('');
	const {isFocused, withFocus} = useFocusable(isActive);

	const submitHandler = (val: string) => {
		if (isFocused) {
			onSubmit(val);
			setValue('');
		}
	};
	return withFocus(
		<>
			{children}
			<TextInput
				value={value}
				onChange={isFocused ? setValue : noop}
				onSubmit={submitHandler}
				focus={isFocused}
			/>
		</>,
	);
};

export default FocusableTextInput;
