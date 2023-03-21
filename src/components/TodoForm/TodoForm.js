import React from 'react'
import TodoNameInput from './Inputs/TodoNameInput'
import PriorityInput from './Inputs/PriorityInput'
import DateInput from './Inputs/DateInput'

function TodoForm({ handleInputChange, form, handleSubmittedForm, DarkTheme }) {
  const { name, priority, date } = form

  return (
    <div className='pt-6'>
      <form
        className={`form-control w-full flex justify-center items-center m-auto pb-12 border border-solid border-transparent ${DarkTheme ? 'border-b-success' : 'border-b-neutral'}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className={`mt-4 text-center ${DarkTheme && 'text-success'} text-2xl`}>Wprowadź swoje zadanie:</h1>
        <div className='mt-4 md:grid md:grid-cols-2'>

          {/* name input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <TodoNameInput
              handleInputChange={handleInputChange}
              name={name}
              DarkTheme={DarkTheme}
            />
          </div>

          {/* date input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <DateInput
              date={date}
              handleInputChange={handleInputChange}
              DarkTheme={DarkTheme}
            />
          </div>

          {/* priority input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <PriorityInput
              priority={priority}
              handleInputChange={handleInputChange}
              DarkTheme={DarkTheme}
            />

          </div>

          {/* submit button */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <button
              className={`btn btn-outline ${DarkTheme ? 'btn-success' : 'btn-dark'} w-full h-full`}
              onClick={handleSubmittedForm}
            >Zapisz</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoForm