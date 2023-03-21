import React from 'react'
import Todo from './Todo/Todo'

export default function TodoList({ DarkTheme, todos, handleTodoDone, handleDeleteDoneTodos }) {
    return (
        <>
            <div className='mt-4 flex flex-col justify-center items-center'>
                <h1 className={`my-2 text-center ${DarkTheme && 'text-success'} text-2xl`}>Aktywne zadania</h1>
                <button
                    className={`btn btn-outline btn-error w-3/4 md:w-1/3 h-full`}
                    onClick={handleDeleteDoneTodos}
                >Usuń gotowe zadania</button>
            </div>

            <div className='mt-8 w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
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
        </>
    )
}