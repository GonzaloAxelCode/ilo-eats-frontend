"use client"

import React from "react";
import CartDownSliderContent from "../main/components/Slides/CartSliderContent";
import ProductSliderOrder from "../main/components/Slides/ProductSliderOrder";
import SearchSliderContent from "../main/components/Slides/SearchSliderContent";
import SlideDownFullScreen from "../main/components/Slides/SlideDownFullScreen";
import { useUICart } from "../main/uihooks/useUICart";
import { useUIProductOrder } from "../main/uihooks/useUIProductOrder";
import { useUISearch } from "../main/uihooks/useUISearch";



const SlidesPage = () => {
    const { isCartOpen, setCartOpen } = useUICart();
    const { isSearchOpen, setSearchOpen } = useUISearch();
    const { isProductOrderOpen, setProductOrderOpen } = useUIProductOrder();

    return (
        <React.Fragment>
            <SlideDownFullScreen isOpen={isCartOpen} setOpen={setCartOpen}>
                <CartDownSliderContent />
            </SlideDownFullScreen>
            <SlideDownFullScreen isOpen={isSearchOpen} setOpen={setSearchOpen}>
                <SearchSliderContent />
            </SlideDownFullScreen>
            <SlideDownFullScreen isOpen={isProductOrderOpen} setOpen={setProductOrderOpen} >
                <ProductSliderOrder />
            </SlideDownFullScreen>
        </React.Fragment>
    )
}

export default SlidesPage