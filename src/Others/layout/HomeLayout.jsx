import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className='font-sans'>
            <Outlet />
        </div>
    )
}

export default HomeLayout