import { useState } from 'react'
import './App.css'
import useMultiForm from "./hooks/useMultiForm.tsx";
import StepOne from "./components/StepOne.tsx";

// 1. create a hook(logic)
// 2. create each step as a separate tsx file
// 3. pass each step as a React node to the hook
// 4. set up typing in app file and pick? typescript

export type FormItems = {
    name: string;
    email: string;
    phone: string;
};

const initialValues: FormItems = {
    name: "Puerto Rico",
    email: "pertrico@yahoo.com",
    phone: "+456 739 3482"
};

function App() {
  const [formData, setFormData] = useState(initialValues);

  function updateForm(fieldsToUpdate: Partial<FormItems>) {
      setFormData({ ...formData, ...fieldsToUpdate});
  }

  const {
    formSteps,
    currentIndex,
    currentStep,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
  } = useMultiForm([
      <StepOne {...formData} />,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>,
      <div>5</div>,
  ]);

  return (
    <div className="App">
      {currentStep}
      {!isFirstStep && <button onClick={goBackwards}>Go back</button>}
      <button onClick={goForwards}>{isLastStep ? "Confirm" : "Next step"}</button>

    </div>
  )
}

export default App
