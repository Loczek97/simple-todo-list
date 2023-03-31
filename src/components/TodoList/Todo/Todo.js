import React from "react";
import TodoBadge from '../../ui/badge/TodoBadge.js'

const Todo = ({ todo, handleTodoDone, themeColors }) => {
  const { name, priority, date, done, time } = todo;

  const { todoColors, textPrimary, textSecondary } = themeColors;


  const doneTodo = done && 'text-pink-500';
  const hoverClasses = `hover:shadow-xl hover:scale-[1.02] transition all duration-300 ease-in-out`;
  const classNames = `shadow-md ${hoverClasses} ${todoColors} ${doneTodo}`

  return (
    <div className={`card relative ${classNames} z-0`}>
      <div className={`card-body`}>
        <div className="absolute top-3 left-3">
          <TodoBadge
            type={priority ? 'priority' : 'standard'}>
            {priority ? 'priorytetowe' : 'standardowe'}
          </TodoBadge>
        </div>

        <h2 className={`card-title text-2xl m-auto text-center ${textPrimary}`}>
          {name}
        </h2>
        <div className={`mt-3 flex flex-col justify-center items-center ${textSecondary}`}>
          <h1>Wykonać do dnia:</h1>
          <table className="mt-2">
            <tbody>
              <tr>
                <td className="text-left">Dnia:&nbsp;</td>
                <td className={`text-center font-bold ${textPrimary}`}>{date}</td>
              </tr>
              <tr>
                <td className="text-left">Godziny: &nbsp;</td>
                <td className={`text-center font-bold ${textPrimary}`}>{time}</td>
              </tr>
            </tbody>
          </table>


        </div>

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
