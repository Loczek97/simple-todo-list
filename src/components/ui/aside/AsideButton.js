import React from 'react'

export default function AsideButton({ isOpen, DarkTheme, onClick, children }) {
    return (
        <button
            className={`w-16 h-64 ${DarkTheme ? "bg-success" : "bg-info"
                } z-20 fixed top-16 -left-6 rounded-md hover:left-0 transition-all ease-in-out duration-300 ${isOpen ? 'hidden' : 'block'} transition-all ease-in-out duration-300`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
