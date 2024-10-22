
"use client"
import ActionAppControls from "./ActionAppControls"
import OrderCallNumber from "./OrderCallNumber"
import RibbonBlack from "./RibbonBlack"

const HeaderRibbon = () => {
    return (
        <div>
            <RibbonBlack />
            <OrderCallNumber />
            <ActionAppControls />
        </div>
    )
}

export default HeaderRibbon