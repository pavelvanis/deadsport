
import React from 'react'
import { Outlet } from 'react-router'

import Header from './Components/Header'
import Footer from './Components/Footer'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
