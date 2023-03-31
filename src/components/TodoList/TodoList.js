import React from 'react'
import Todo from './Todo/Todo'
import CalcHowMuchDone from '../../utils/TodoUtils/CalcHowMuchDone'
import icon from '../../assets/img/icon.svg'
import PrimaryBadge from '../ui/badge/PrimaryBadge'

export default function TodoList({ DarkTheme, themeColors, todos, handleTodoDone }) {
    const { cardColor, textPrimary, textSecondary, badge } = themeColors

    const checkIfTodosExist = () => {
        let { doneTodos, allTodos } = CalcHowMuchDone(todos)
        if (allTodos === 0) return 'Brak zadań'
        return `${doneTodos}/${allTodos}`
    }

    return (
        <div className='p-4 flex flex-col min-h-screen'>
            <div className={`todo-container relative rounded-md h-full ${cardColor} ${textSecondary} mx-4`}>
                <div className='pt-4 flex flex-col justify-center items-center'>
                    <div className='flex flex-row justify-center items-center'>
                        <PrimaryBadge
                            additionalClass={`${badge} h-12 w-auto`}
                            padding='sm'
                        >
                            <img src={icon} width='48px' height='48px' alt="logo" />
                        </PrimaryBadge>
                        <h1 className={`py-2 pl-1 text-center ${textPrimary} text-3xl`}>Aktywne zadania</h1>
                    </div>

                    <PrimaryBadge additionalClass={`mt-2 ${badge}`} padding='md'>
                        Wykonano:
                        <div className='badge ml-1'>{checkIfTodosExist()}</div>
                    </PrimaryBadge>
                </div>

                {todos.length > 0 ? (
                    <div className='mt-4 w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-8'>
                        {todos.map((todo) => (
                            <Todo
                                key={todo.id}
                                handleTodoDone={handleTodoDone}
                                todo={todo}
                                DarkTheme={DarkTheme}
                                themeColors={themeColors}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='py-10 m-auto text-center'>
                        <h1 className={`text-xl ${textPrimary}`}>Brak zadań do wykonania</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
