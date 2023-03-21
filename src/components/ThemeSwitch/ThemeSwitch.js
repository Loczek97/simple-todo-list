import React from 'react'

function ThemeSwitch({ DarkTheme, handleInputChange }) {
    return (
        <button name="themeToggle" className={`btn ${DarkTheme ? 'border-white outline-white text-white' : 'btn-outline'} fixed top-4 right-4`} onClick={(e) => handleInputChange(e)}>
            {DarkTheme ? 'Ciemny' : 'Jasny'}
        </button>
    )
}

export default ThemeSwitch
