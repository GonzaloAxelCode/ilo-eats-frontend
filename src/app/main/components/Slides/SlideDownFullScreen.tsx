"use client"
import { VscChromeClose } from "react-icons/vsc";

import { createPortal } from 'react-dom';


const SlideDownFullScreen = ({ isOpen, setOpen, children, }: any) => {

    return (
        <div>
            {createPortal(<div >
                <div
                    className={`fixed overflow-y-auto top-0 w-full min-h-screen bg-white overflow-hidden z-[21000] transform transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div
                        className="absolute top-0 right-4 cursor-pointer p-4 z-20"
                        onClick={() => {
                            setOpen(false);
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

export default SlideDownFullScreen