import React from "react";

const Todo = ({ todo, handleTodoDone }) => {
  const { name, priority, date, currDate, done, styles } = todo;

  const { primaryColor, secondaryColor } = styles;

  return (
    <div className={`card relative text-${secondaryColor} bg-${primaryColor}`}>
      <div className="card-body">
        <h2 className={`card-title w-full text-center`}>
          {`Nazwa: ${name}`}
        </h2>
        <p>Typ: <span className="font-bold">{priority ? "priorytetowe" : 'standardowe'}</span></p>
        <p>Data wprowadzenia: {currDate}</p>
        <p>Wykonać do: {date}</p>
        <div className="card-actions justify-end">
          <input
            type="checkbox"
            className={`checkbox outline-${secondaryColor} border-[2px] border-solid border-black ml-4 absolute top-4 right-4`}
            checked={done}
            onChange={() => handleTodoDone(todo)}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
