import { Content } from "../Content"
import { Footer } from "../Footer"
import { Header } from "../Header"
import "./index.scss"
import React from 'react'

export const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
