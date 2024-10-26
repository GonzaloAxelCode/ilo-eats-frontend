"use client"

import React from "react";
import CartDownSliderContent from "../main/components/Slides/CartSliderContent";
import SearchSliderContent from "../main/components/Slides/SearchSliderContent";
import SlideDownFullScreen from "../main/components/Slides/SlideDownFullScreen";
import { useUICart, useUISearch } from "../main/context/UIContext";


const SlidesPage = () => {
    const { isCartOpen, setCartOpen } = useUICart();
    const { isSearchOpen, setSearchOpen } = useUISearch();

    return (
        <React.Fragment>
            <SlideDownFullScreen isOpen={isCartOpen} setOpen={setCartOpen}>
                <CartDownSliderContent />
            </SlideDownFullScreen>
            <SlideDownFullScreen isOpen={isSearchOpen} setOpen={setSearchOpen}>
                <SearchSliderContent />
            </SlideDownFullScreen>
        </React.Fragment>
    )
}

export default SlidesPage