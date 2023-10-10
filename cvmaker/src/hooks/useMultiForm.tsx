import { ReactElement, useState } from "react";

// 1. take in array of elements
// 2. handle going forward, backwards, goToStep
// 3. which is the current step I'm on
// 4. utility -> if this is the first or last

const useMultiForm = (formSteps: ReactElement[]) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const goBackwards = () => {
        if(currentIndex === 0)
            return;
        setCurrentIndex((prev) => prev - 1);
    }

    const goForwards = () => {
        if(currentIndex === formSteps.length - 1)
            return;
        setCurrentIndex((prev) => prev + 1);
    }



    return {
        formSteps,
        currentIndex,
        currentStep: formSteps[currentIndex],
        goForwards,
        goBackwards,
        isFirstStep: currentIndex === 0,
        isLastStep: currentIndex === formSteps.length - 1

    }
}

export default useMultiForm;