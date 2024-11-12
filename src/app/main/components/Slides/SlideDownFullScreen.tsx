"use client"
import { VscClose } from "react-icons/vsc";

import { useEffect } from "react";
import { createPortal } from 'react-dom';


const SlideDownFullScreen = ({ isOpen, setOpen, children, }: any) => {

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }


        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div>
            {createPortal(<div >
                <div
                    style={{
                        overflowY: "scroll",
                        height: "100vh"
                    }}
                    className={`fixed  top-0 w-full  bg-white overflow-hidden z-[21000] transform transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div
                        className="absolute top-0 right-4 cursor-pointer p-4 pr-0 z-20"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <VscClose className="w-10 h-10 text-gray-400" />
                    </div>
                    {children}
                </div>
            </div>, document.body, "cart-down-slider-fullscreen")}
        </div>
    )
}

export default SlideDownFullScreen