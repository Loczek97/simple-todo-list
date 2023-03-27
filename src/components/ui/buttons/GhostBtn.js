import React from 'react'

const GhostBtn = ({ children ,onClick, additionalClass, DarkTheme}) => <button className={`btn ${DarkTheme ? 'btn-black' : 'btn-ghost'} ${additionalClass} text-white`} onClick={onClick}> {children} </button>
    

export default GhostBtn
