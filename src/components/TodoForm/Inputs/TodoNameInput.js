import React from "react";

function TodoNameInput({ handleInputChange, inputValue }) {
  return (
    <>
      <input
        type="text"
        name="todoNameValue"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        placeholder="Wprowadź nazwę..."
        className="input w-full input-bordered focus:outline-success"
      />
    </>
  );
}

export default TodoNameInput;
