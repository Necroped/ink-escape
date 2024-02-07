import React from 'react';
import Game from './Game.js';
import AlertContextProvider from './Alert/context/Alert.js';
import StepsContextProvider from './StepsManager/context/StepsContext.js';

const App = () => {
	return (
		<AlertContextProvider>
			<StepsContextProvider>
				<Game />
			</StepsContextProvider>
		</AlertContextProvider>
	);
};

export default App;
