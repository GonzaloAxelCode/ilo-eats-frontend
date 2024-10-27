"use client"

import React from "react"
import Footer from "../main/components/Footer"
import FloatNavigationCategories from "./homecomponents/FloatNavigationCategories"
import HeaderRibbon from "./homecomponents/HeaderRibbon"


const LayoutClient = ({ children }: any) => {
    return (
        <React.Fragment>
            <HeaderRibbon />
            <FloatNavigationCategories />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LayoutClient