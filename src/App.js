import React, { useState } from "react"
import "./assets/index.css"
import TodoInput from "./components/TodoForm/TodoForm"

function App() {
  const [InputValue, setInputValue] = useState("")
  const [priority, setPriority] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "priority") {
      setPriority(!priority)
    } else {
      setInputValue(value)
    }
  }

  const handleSubmittedForm = (e) => {
    console.log(InputValue)
  }


  return (
    <>
      <TodoInput
        inputValue={InputValue}
        handleInputChange={handleInputChange}
        priority={priority}
        handleSubmittedForm={handleSubmittedForm}
      />
    </>
  );
}

export default App;
