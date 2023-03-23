import React from "react";
import InputLabel from "./InputLabel";

function PriorityInput({ priority, handleInputChange, theme }) {


  return (
    <div className="flex flex-row justify-center items-center">
      <InputLabel id="priority-input">Wysoki priorytet</InputLabel>
      <input
        type="checkbox"
        id="priority-input"
        name="priority"
        className={`checkbox ${theme} ml-2`}
        checked={priority}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

export default PriorityInput;
