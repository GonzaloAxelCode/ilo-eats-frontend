"use client"

import ArrowDown from "@/app/main/ui/icons/ArrowDown";
import cn from "@/app/utils/cn";

import { useRouter } from "next/navigation";
import { useState } from "react";


const ItemNavCategory = ({
    children,
    label,
    Icon = null,
    path,
    contentClassName,
    contentPositionFull = false,
    dropdwonAnimate = true,
    opacityAnimate = false,
    rtl = false,
    ...props

}: any) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    return (
        <div
            className={cn(
                contentPositionFull && "relative",
                "h-auto my-auto"
            )}

            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            {...props}
        >
            <div
                className="cursor-pointer p-2 flex items-center"
                onClick={() => {
                    router.push(path);
                }}
            >
                <span className="mr-2 opacity-50">
                    {Icon && <Icon />}
                </span>
                <span className="font-semibold text-[#61443e] text-sm">{label}</span>
                <span className="ml-1">{children && <ArrowDown className="w-3 h-3 fill-[#61443e]" />}</span>
            </div>
            {children && (

                <div
                    className={cn(
                        "absolute  bg-white cursor-default top-[60px] shadow-[0_0_40px_rgba(0,0,0,0.2)] rounded-md z-10 transition-all ease-in-out duration-500",
                        contentClassName,
                        {
                            "right-0": rtl,
                            "left-0": !rtl
                        },
                        {
                            "mt-0 max-h-[600px] overflow-hidden  transition-all ease-in-out duration-500": isOpen && dropdwonAnimate,
                            "max-h-0 mt-0 overflow-hidden  transition-all ease-in-out duration-500": !isOpen && dropdwonAnimate,
                        },
                        {
                            "opacity-1   mt-0 max-h-[600px] overflow-hidden  transition-opacity ease-in-out duration-500": isOpen && opacityAnimate,
                            "opacity-0  max-h-0 mt-0 overflow-hidden  transition-opacity ease-in-out duration-500": !isOpen && opacityAnimate,
                        },

                    )}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default ItemNavCategory