import React from 'react'

const InputLabel = ({ id, children, DarkTheme }) => <label htmlFor={id} className={`${DarkTheme ? 'text-white' : 'text-black'} text-lg`}>{children}</label>

export default InputLabel
