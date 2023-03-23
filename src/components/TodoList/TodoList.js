import React from 'react'
import Todo from './Todo/Todo'
import CalcHowMuchDone from '../../utils/CalcHowMuchDone'
import icon from '../../assets/img/icon.png'
import PrimaryBadge from '../ui/badge/PrimaryBadge'

export default function TodoList({ DarkTheme, themeColors, todos, handleTodoDone }) {
    const { cardColor, textPrimary, textSecondary, badge } = themeColors

    console.clear()
    console.log(themeColors)

    const checkIfTodosExist = () => {
        let { doneTodos, allTodos } = CalcHowMuchDone(todos)
        if (allTodos === 0) return 'Brak zadań'
        return `${doneTodos}/${allTodos}`
    }
    return (
        <div className={`col-span-1 md:col-span-7 h-full rounded-md ${cardColor} ${textSecondary}`}>
            <div className='mt-4 flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <PrimaryBadge
                        additionalClass={`${badge} h-12 w-auto`}
                        padding='sm'
                    >
                        <img src={icon} width='48px' height='48px' alt="logo" />
                    </PrimaryBadge>
                    <h1 className={`my-2 ml-1 text-center ${textPrimary} text-3xl`}>Aktywne zadania</h1>
                </div>

                <PrimaryBadge additionalClass={`mt-2 ${badge}`} padding='md'>
                    Wykonano:
                    <div className='badge ml-1'>{checkIfTodosExist()}</div>
                </PrimaryBadge>
            </div>

            <div className='my-4 w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                {todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            handleTodoDone={handleTodoDone}
                            todo={todo}
                            DarkTheme={DarkTheme}
                        />
                    )
                })}
            </div>
        </div>
    )
}