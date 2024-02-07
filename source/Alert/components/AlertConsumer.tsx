// YourComponent.tsx
import React, {FC} from 'react';
import {Text} from 'ink';
import {useAlert} from '../context/Alert.js';
import config from '../config/alert.js'
const AlertConsumer: FC = () => {
	const {alerts} = useAlert();

	return alerts.map((a, index) => <Text color={config.color[a.level]} key={index}>{a.message}</Text>);
};

export default AlertConsumer;
