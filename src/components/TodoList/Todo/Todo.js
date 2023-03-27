import React from "react";
import classname from "classname";
import TodoBadge from '../../ui/badge/TodoBadge.js'

const Todo = ({ todo, handleTodoDone }) => {
  const { name, priority, date, currDate, done, styles } = todo;

  const { primaryColor, shadowColor } = styles;
  const hoverClasses = `hover:shadow-xl hover:${shadowColor} hover:scale-[1.03] hover:z-10 transition all duration-300 ease-in`;
  const backgroundGradient = `bg-gradient-to-r from-black/[0.35] to-transparent`;
  const classNames = classname(`text-white shadow-lg ${shadowColor}  ${primaryColor} ${backgroundGradient} ${hoverClasses}}`)

  return (
    <div className={`card relative ${classNames} z-0`}>
      <div className={`card-body`}>
        <div className="absolute top-3 left-3">
          <TodoBadge
            type={priority ? 'priority' : 'standard'}>
            {priority ? 'priorytetowe' : 'standardowe'}
          </TodoBadge>
        </div>

        <h2 className={`card-title m-auto text-center`}>
          {name}
        </h2>
        <p>Dodano: {currDate}</p>
        <p>Wykonać do: {date}</p>
        <div className="card-actions justify-end">
          <input
            type="checkbox"
            className={`checkbox bg-white ml-4 absolute top-4 right-4`}
            checked={done}
            onChange={() => handleTodoDone(todo)}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
