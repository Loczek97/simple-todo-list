import React from "react";
import InputLabel from "./InputLabel";

function PriorityInput({ priority, handleInputChange, DarkTheme }) {


  return (
    <div className="flex flex-row md:flex-col justify-center items-center">
      <InputLabel id="priority-input" DarkTheme={DarkTheme}>Wysoki priorytet</InputLabel>
      <input
        type="checkbox"
        id="priority-input"
        name="priority"
        className={`checkbox ${DarkTheme && 'checkbox-success'} ml-4`}
        checked={priority}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

export default PriorityInput;
