import React from 'react'
import InputLabel from './InputLabel'

function DateInput({ handleInputChange, DarkTheme, date }) {
    return (
        <>
            <InputLabel id="date" DarkTheme={DarkTheme}>
                Do kiedy wykonać?
            </InputLabel>
            <input
                type="date"
                value={date}
                id='todoDateValue'
                name='todoDateValue'
                className={`input input-bordered w-full ${DarkTheme ? 'bg-neutral border-success text-white focus:outline-success' : 'bg-white border-neutral text-neutral focus:outline-neutral'}`}
                onChange={(e) => handleInputChange(e)}
            />
        </>

    )
}

export default DateInput
