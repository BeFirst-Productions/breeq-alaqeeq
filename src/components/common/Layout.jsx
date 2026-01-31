import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow mt-20 lg:mt-[112px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout