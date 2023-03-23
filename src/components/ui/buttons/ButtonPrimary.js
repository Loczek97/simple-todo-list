import React from 'react'

export default function ButtonPrimary({ onClick, DarkTheme, themeColors, children }) {
    return (
        <button
            className={`btn ${DarkTheme ? 'btn-outline' : 'text-white'} btn-success w-full h-full`}
            onClick={onClick}
        >{children}</button>
    )
}
