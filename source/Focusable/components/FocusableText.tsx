import React, {FC} from 'react';
import useFocusable from '../hooks/useFocusable.js';

const FocusableText: FC<{children: JSX.Element; isActive?: boolean}> = ({
	children,
	isActive = true,
}) => {
	const {withFocus} = useFocusable(isActive);
	return withFocus(<>{children}</>);
};

export default FocusableText;
