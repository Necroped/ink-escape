import React, {createContext, useContext, useState, useEffect, FC} from 'react';
import config from '../config/alert.js';

interface AlertContextProps {
	add: (m: string, level?: Level) => void;
	alerts: Alert[];
}

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

const AlertContextProvider: FC<{children: JSX.Element}> = ({children}) => {
	const [alerts, setAlerts] = useState<Alert[]>([]);

	const add = (message: string, level: Level = 'SUCCESS') => {
		setAlerts(p => [...p, { message, level}]);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setAlerts(p => p.slice(1));
		}, config.timeout);

		return () => clearTimeout(timer);
	}, [alerts]);

	return (
		<AlertContext.Provider value={{add, alerts}}>
			{children}
		</AlertContext.Provider>
	);
};

const useAlert = () => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error('useAlert must be used within an AlertProvider');
	}
	return context;
};

export default AlertContextProvider
export { useAlert }