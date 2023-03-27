import React from 'react'
/***
 * @param {Object} props - props
 * @param {Boolean} props.DarkTheme - dark theme
 * @param {Function} props.handleInputChange - function to handle input change
 * @param {String} props.additionalClass - additional class for button
 * @returns toggle theme button
 * @example
 * <ThemeSwitch DarkTheme={DarkTheme} handleInputChange={handleInputChange} additionalClass='ml-2' />
 */
function ThemeSwitch({ DarkTheme, handleInputChange, additionalClass }) {
    return (
        <button name="themeToggle" className={`btn ${DarkTheme ? 'text-white bg-gray-900/[0.75]' : 'bg-white text-black'} ${additionalClass}`} onClick={(e) => handleInputChange(e)}>
            {DarkTheme ? 'Ciemny' : 'Jasny'}
        </button>
    )
}

export default ThemeSwitch
