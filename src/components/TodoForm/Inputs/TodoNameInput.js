import React from "react";
import InputLabel from "./InputLabel";

function TodoNameInput({ handleInputChange, name, theme }) {
  return (
    <>
      <InputLabel id="todoName">
        Nazwa zadania:
      </InputLabel>
      <input
        type="text"
        id="todoName"
        name="name"
        value={name}
        onChange={(e) => handleInputChange(e)}
        placeholder="Wprowadź nazwę..."
        className={`input input-bordered w-full ${theme}}`}
      />
    </>
  );
}

export default TodoNameInput;
