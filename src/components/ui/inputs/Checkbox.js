import React from 'react'
import InputLabel from './InputLabel'

export default function Checkbox({ id, checked, handleInputChange, theme }) {

    return (
        <div div className="mt-8 mx-2 md:w-3/4 flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <InputLabel id={id}>
                    Wysoki priorytet
                </InputLabel>
                <input
                    type="checkbox"
                    id={id}
                    name={id}
                    className={`checkbox ${theme} ml-2`}
                    checked={checked}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
        </div>
    )
}
