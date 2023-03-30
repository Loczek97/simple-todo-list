import React, { useState } from "react";
import ButtonPrimary from "../ui/buttons/ButtonPrimary";
import DateInput from "./Inputs/DateInput";
import DeleteButton from "../ui/buttons/DeleteButton";
import GhostBtn from "../ui/buttons/GhostBtn";
import icon from "../../assets/img/icon.svg";
import PriorityInput from "./Inputs/PriorityInput";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import TodoNameInput from "./Inputs/TodoNameInput";



function TodoForm({
  handleInputChange,
  form,
  handleSubmittedForm,
  DarkTheme,
  themeColors,
  handleDeleteDoneTodos,
}) {
  const { name, priority, date } = form;
  const { textPrimary, textSecondary, input, checkbox, aside } =
    themeColors;
  const [OpenDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!OpenDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  console.log(aside)

  return (
    <>
      <button
        className={`w-16 h-64 ${DarkTheme ? "bg-success" : "bg-info"
          } z-20 fixed top-16 -left-6 rounded-md hover:left-0 transition-all ease-in-out duration-300 ${OpenDrawer ? 'hidden' : 'block'} transition-all ease-in-out duration-300`}
        onClick={handleOpenDrawer}
      >
        <img
          src={icon}
          alt="easyDo icon"
          className="absolute top-1/2 -translate-y-1/2"
        />
      </button>

      <div
        className={`w-screen h-screen absolute top-0 left-0 z-20 ${OpenDrawer ? 'visible' : 'hidden'}`}
        onClick={handleCloseDrawer}>
      </div>

      <div className={`absolute top-0 z-30 w-3/4 md:w-1/3 text-base-content ${OpenDrawer ? "left-0" : "-left-3/4"} backdrop-blur-sm ${aside} transition-all ease-in-out duration-300`}>
        <form
          className={`form-control w-full h-screen bg-transparent flex justify-center items-center m-auto ${textSecondary} transition-all ease-in-out duration-300`}
          onSubmit={(e) => e.preventDefault()}
        >
          <h1
            className={`mt-4 text-center font-bold ${textPrimary} text-3xl`}
          >
            Wprowadź swoje zadanie:
          </h1>
          <div className="mt-4 flex flex-col items-center">
            {/* name input */}
            <div className="mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center">
              <TodoNameInput
                handleInputChange={handleInputChange}
                name={name}
                theme={input}
              />
            </div>

            {/* date input */}
            <div className="mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center">
              <DateInput
                date={date}
                handleInputChange={handleInputChange}
                theme={input}
              />
            </div>

            {/* priority input */}
            <div className="mt-8 mx-2 md:w-3/4 flex flex-row justify-center items-center">
              <PriorityInput
                priority={priority}
                handleInputChange={handleInputChange}
                theme={checkbox}
              />
            </div>

            {/* submit button */}
            <div className="mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center">
              <ButtonPrimary
                onClick={handleSubmittedForm}
                DarkTheme={DarkTheme}
              >
                Dodaj zadanie
              </ButtonPrimary>
            </div>
            <div className="mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center">
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


          <GhostBtn
            additionalClass={'absolute top-4 right-4'}
            onClick={handleCloseDrawer}
            DarkTheme={DarkTheme}
          >
            X
          </GhostBtn>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
