import React from 'react';
import { useFocusManager, useInput} from 'ink';
import FocusableTextInput from './Focusable/components/FocusableTextInput.js';
import FocusableToggle from './Focusable/components/FocusableToggle.js';
import AlertConsumer from './Alert/components/AlertConsumer.js';
import { useSteps } from './StepsManager/context/StepsContext.js';
import BigText from 'ink-big-text';

const Game = () => {

	const {focusPrevious, focusNext} = useFocusManager();
	const { currentStep, _try } = useSteps()

	useInput((_input: string, key: any) => {
		if (key.upArrow) {
			focusPrevious();
		}

		if (key.downArrow) {
			focusNext();
		}
	});

	return (
		<>
			<BigText text={currentStep?.title}/>
			<FocusableToggle.Context initialValue={true}>
				<FocusableToggle.Content>
					{(isActive: boolean) => <>{isActive && 'Gros texte à lire'}</>}
				</FocusableToggle.Content>
				<FocusableToggle.Trigger>
					{(isActive: boolean) => (
						<>{isActive ? 'Cacher le texte.' : 'Voir le texte.'}</>
					)}
				</FocusableToggle.Trigger>
			</FocusableToggle.Context>
			<FocusableTextInput onSubmit={_try}>
				Votre valeur:{' '}
			</FocusableTextInput>
			<AlertConsumer />
		</>
	);
};

export default Game;
