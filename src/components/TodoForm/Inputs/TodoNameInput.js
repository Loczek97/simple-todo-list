import React from "react";
import InputLabel from "./InputLabel";

function TodoNameInput({ handleInputChange, name, DarkTheme }) {
  return (
    <>
      <InputLabel id="todoName" DarkTheme={DarkTheme}>
        Nazwa zadania:
      </InputLabel>
      <input
        type="text"
        id="todoName"
        name="name"
        value={name}
        onChange={(e) => handleInputChange(e)}
        placeholder="Wprowadź nazwę..."
        className={`input input-bordered w-full ${DarkTheme ? 'bg-neutral border-success text-white focus:outline-success' : 'bg-white border-neutral text-neutral focus:outline-neutral'}`}
      />
    </>
  );
}

export default TodoNameInput;
