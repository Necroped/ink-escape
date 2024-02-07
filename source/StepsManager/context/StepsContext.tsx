import React, { FC, createContext, useContext, useState } from 'react'
import config from '../config/steps.js'
import { useAlert } from '../../Alert/context/Alert.js'

const StepsContext = createContext({} as {
  currentStep: Step
  _try: (_val: string) => boolean
});

const StepsContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = config[stepIndex] as Step;
  const { add } = useAlert()

  const _try = (val: string) => {
    if(val === currentStep?.expected) {
      add(val)
      setStepIndex(i => i + 1)
      currentStep.validated = true
      return true
    }
    add(val, "ERROR")
    currentStep.errors.push(val)
    return false
  }


  return <StepsContext.Provider value={{
    currentStep,
    _try
  }}>
    { children }
  </StepsContext.Provider>
}

const useSteps = () => useContext(StepsContext)



export default StepsContextProvider
export { useSteps }
