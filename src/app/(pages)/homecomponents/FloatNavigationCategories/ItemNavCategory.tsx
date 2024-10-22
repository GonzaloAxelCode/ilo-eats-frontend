"use client"

import ArrowDown from "@/app/main/ui/icons/ArrowDown";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomDropdownContent from "./CustomDropdownContent";

const ItemNavCategory = ({
    children,
    label,
    Icon,
    path,
    left,
    typeEffect,
    ...props
}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    return (
        <div
            className="relative flex items-center"
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
                <span className="mr-2">
                    <Icon />
                </span>
                <span className="font-rubik-500 text-[#61443e] text-sm">{label}</span>
                <span className="ml-1">{children && <ArrowDown />}</span>
            </div>
            {children && (
                <CustomDropdownContent
                    typeEffect={typeEffect}
                    left={left}
                    isOpen={isOpen}
                >
                    {children}
                </CustomDropdownContent>
            )}
        </div>
    )
}

export default ItemNavCategory