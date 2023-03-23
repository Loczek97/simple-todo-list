import React from 'react'

export default function DeleteButton({ onClick, DarkTheme }) {
    return (
        <button
            className={`btn ${DarkTheme && 'btn-outline'} btn-error text-white h-full`}
            onClick={onClick}
        >Usuń gotowe zadania</button>
    )
}
