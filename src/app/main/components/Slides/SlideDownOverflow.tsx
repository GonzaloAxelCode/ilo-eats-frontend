"use client"
import { VscChromeClose } from "react-icons/vsc";

import { createPortal } from 'react-dom';


const SlideDownOverflow = ({ isOpen, setOpen, children, }: any) => {

    return (
        <div>
            {createPortal(<div >
                <div
                    className={`fixed h-screen top-[4.8rem] w-full bg-white overflow-hidden z-20 transform transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "max-h-screen" : "max-h-0"
                        }`}
                >
                    <div
                        className="absolute top-0 right-4 cursor-pointer p-4 z-20"
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <VscChromeClose className="w-10 h-10 text-gray-400" />
                    </div>
                    {children}
                </div>
            </div>, document.body, "cart-down-slider-fullscreen")}
        </div>
    )
}

export default SlideDownOverflow