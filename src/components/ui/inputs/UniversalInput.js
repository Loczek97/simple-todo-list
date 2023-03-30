import React from 'react'
import InputLabel from './InputLabel'

export default function UniversalInput({ id, type, handleInputChange, value, theme, placeholder, label }) {
    return (
        <div className="mt-8 mx-2 md:w-3/4 flex flex-col justify-center items-center">
            <InputLabel id={id}>
                {label}
            </InputLabel>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={(e) => handleInputChange(e)}
                placeholder={placeholder}
                className={`input input-bordered w-full ${theme}}`}
            />
        </div>
    )
}
