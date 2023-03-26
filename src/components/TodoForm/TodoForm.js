import React, { useState } from 'react'
import TodoNameInput from './Inputs/TodoNameInput'
import PriorityInput from './Inputs/PriorityInput'
import DateInput from './Inputs/DateInput'
import ButtonPrimary from '../ui/buttons/ButtonPrimary'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import DeleteButton from '../ui/buttons/DeleteButton'
import icon from '../../assets/img/icon.svg'

function TodoForm({ handleInputChange, form, handleSubmittedForm, DarkTheme, themeColors, handleDeleteDoneTodos }) {
  const { name, priority, date } = form
  const { cardColor, textPrimary, textSecondary, badge, input, checkbox } = themeColors
  const [OpenDrawer, setOpenDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setOpenDrawer(!OpenDrawer)
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  return (
    <div className="drawer top-0 left-0 fixed z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle h-full" onClick={handleOpenDrawer} />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className={`w-20 h-64 ${DarkTheme ? 'bg-success' : 'bg-info'} fixed top-16 -left-6 rounded-md hover:left-0 transition-all ease-in-out duration-300`}>
          <img src={icon} alt="easyDo icon" className='absolute top-1/2 -translate-y-1/2' />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" onClick={handleCloseDrawer}></label>
        <div className="menu w-3/4 md:w-1/3 bg-base-100 text-base-content">
          <form
            className={`form-control w-full h-full flex justify-center items-center m-auto ${cardColor} ${textSecondary}`}
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
              additionalClass={`mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center`}
            />

          </form>
        </div>
      </div>
    </div>

  )
}

export default TodoForm