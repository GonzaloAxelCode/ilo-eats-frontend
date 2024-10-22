
"use client"
import ActionAppControls from "./ActionAppControls"
import OrderCallNumber from "./OrderCallNumber"
import RibbonBlack from "./RibbonBlack"

const HeaderRibbon = () => {
    const offset = 0
    return (
        <div className={`fixed z-20 w-full  h-[163px] flex flex-col  ${offset === 0 ? "bg-transparent" : "bg-transparent"}`}>
            <RibbonBlack />
            <div className="h-auto z-[99px] absolute left-1/2 top-0  w-screen  -translate-x-1/2 mx-auto max-w-screen-xl">
                <OrderCallNumber />
                <ActionAppControls />
            </div>
        </div>
    )
}

export default HeaderRibbon