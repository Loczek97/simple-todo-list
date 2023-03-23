import React from 'react'
import TodoNameInput from './Inputs/TodoNameInput'
import PriorityInput from './Inputs/PriorityInput'
import DateInput from './Inputs/DateInput'
import ButtonPrimary from '../ui/buttons/ButtonPrimary'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import DeleteButton from '../ui/buttons/DeleteButton'

function TodoForm({ handleInputChange, form, handleSubmittedForm, DarkTheme, themeColors, handleDeleteDoneTodos }) {
  const { name, priority, date } = form
  const { cardColor, textPrimary, textSecondary, badge, input, checkbox } = themeColors

  return (
    <div className={`pt-4 flex min-h-full col-span-1 md:h-full md:col-span-3 ${cardColor} ${textSecondary} rounded-md`}>
      <form
        className={`form-control w-full flex justify-center items-center m-auto pb-12`}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className={`mt-4 text-center font-bold ${textPrimary} text-3xl`}>Wprowadź swoje zadanie:</h1>
        <div className='mt-4 flex flex-col items-center'>

          {/* name input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <TodoNameInput
              handleInputChange={handleInputChange}
              name={name}
              theme={input}
            />
          </div>

          {/* date input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <DateInput
              date={date}
              handleInputChange={handleInputChange}
              theme={input}
            />
          </div>

          {/* priority input */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-row justify-center items-center'>
            <PriorityInput
              priority={priority}
              handleInputChange={handleInputChange}
              theme={checkbox}
            />

          </div>

          {/* submit button */}
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <ButtonPrimary
              onClick={handleSubmittedForm}
              DarkTheme={DarkTheme}
            >
              Dodaj zadanie
            </ButtonPrimary>
          </div>
          <div className='mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center'>
            <DeleteButton
              onClick={handleDeleteDoneTodos}
              DarkTheme={DarkTheme}
            />
          </div>
        </div>

        <ThemeSwitch
          DarkTheme={DarkTheme}
          handleInputChange={handleInputChange}
          additionalClass={'absolute top-12 left-12'}
        />

      </form>
    </div>
  )
}

export default TodoForm