import React from "react";

function PriorityInput({ priority, handleInputChange, children }) {


  return (
    <div className="flex justify-center items-center">
      <label htmlFor="priority-input">
        <span className="text-xl mx-3">{children}</span>
      </label>
      <input
        type="checkbox"
        id="priority-input"
        name="priority"
        className={`checkbox checkbox-success`}
        checked={priority}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

export default PriorityInput;
