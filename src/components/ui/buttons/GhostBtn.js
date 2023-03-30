import React from 'react'

const GhostBtn = ({ children ,onClick, additionalClass, DarkTheme}) => <button className={`btn ${DarkTheme ? 'ghost' : 'bg-gray-300 outline-none border-none'} ${additionalClass} text-white`} onClick={onClick}> {children} </button>
    

export default GhostBtn
