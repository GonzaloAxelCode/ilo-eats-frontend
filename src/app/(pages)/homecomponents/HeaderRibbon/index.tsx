
"use client"
import useScroll from "@/app/main/uihooks/useScroll"
import ActionAppControls from "./ActionAppControls"
import OrderCallNumber from "./OrderCallNumber"
import RibbonBlack from "./RibbonBlack"

const HeaderRibbon = () => {
    const { scrollY } = useScroll()

    return (
        <div className={`fixed z-20 w-full  h-[163px] flex flex-col transition-all ease-in-out duration-500 ${scrollY === 0 ? "bg-transparent" : "bg-white"}`}>

            <RibbonBlack />
            <div className="h-auto z-[99px] absolute left-1/2 top-0  -translate-x-1/2  w-screen  mx-auto max-w-screen-xl">
                <OrderCallNumber />
                <ActionAppControls />
            </div>
        </div>
    )
}

export default HeaderRibbon