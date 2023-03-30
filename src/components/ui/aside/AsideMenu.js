import React from 'react'

export default function AsideMenu({ children, OpenDrawer, handleCloseDrawer, asideColorTheme }) {
    return (
        <>
            <div
                className={`w-screen h-screen absolute top-0 left-0 z-20 ${OpenDrawer ? 'visible backdrop-blur-sm' : 'hidden backdrop-blur-none'}`}
                onClick={handleCloseDrawer}>
                {/*Backdrop - leave it empty!*/}
            </div>

            <div className={`absolute top-0 z-30 w-3/4 md:w-1/3 text-base-content ${OpenDrawer ? "left-0" : "-left-3/4"} backdrop-blur-sm ${asideColorTheme} transition-all ease-in-out duration-300`}>
                {/*Aside Menu content*/}
                {children}
            </div>
        </>
    )
}
