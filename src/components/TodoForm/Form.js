import React from 'react'
import ButtonPrimary from "../ui/buttons/ButtonPrimary";
import DeleteButton from "../ui/buttons/DeleteButton";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import UniversalInput from '../ui/inputs/UniversalInput';
import Checkbox from '../ui/inputs/Checkbox';

export default function Form({ handleInputChange, DarkTheme, handleSubmittedForm, handleDeleteDoneTodos, form, themeColors }) {
    const { name, priority, date } = form;
    const { textPrimary, textSecondary, input, checkbox } =
        themeColors;

    return (
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
                <UniversalInput
                    id="name"
                    type="text"
                    handleInputChange={handleInputChange}
                    value={name}
                    theme={input}
                    placeholder="Wprowadź nazwę..."
                    label="Nazwa zadania:"
                />

                {/* date input */}
                <UniversalInput
                    id="todoDateValue"
                    type="date"
                    handleInputChange={handleInputChange}
                    value={date}
                    theme={input}
                    label="Do kiedy wykonać?"
                />

                {/* priority input */}
                <Checkbox
                    id="priority"
                    checked={priority}
                    handleInputChange={handleInputChange}
                    theme={checkbox}
                />

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
        </form>
    )
}
