import React from 'react'
import InputLabel from './InputLabel'

function DateInput({ handleInputChange, theme, date }) {
    return (
        <>
            <InputLabel id="date" >
                Do kiedy wykonać?
            </InputLabel>
            <input
                type="date"
                value={date}
                id='todoDateValue'
                name='todoDateValue'
                className={`input input-bordered w-full ${theme}`}
                onChange={(e) => handleInputChange(e)}
            />
        </>

    )
}

export default DateInput
