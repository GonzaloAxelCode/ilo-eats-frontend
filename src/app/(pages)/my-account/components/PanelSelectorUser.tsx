"use client"
import { useUIProfile } from "@/app/main/uihooks/useUIProfile";
import Link from "next/link";

import { FaRegAddressBook } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

const panel_links = [
    {
        name: "Dashboard",
        icon: TfiDashboard,
        path: "/my-account#dashboard"
    },
    {
        name: "Orders",
        icon: SlDocs,
        path: "/my-account/orders"
    },
    {
        name: "Address",
        icon: FaRegAddressBook,
        path: "/my-account/edit-address"
    },
    {
        name: "Payment methods",
        icon: MdOutlinePayment,
        path: "/my-account/payment-methods"
    },
    {
        name: "Account Details",
        icon: VscAccount,
        path: "/my-account/edit-account"
    },
    {
        name: "Log Out",
        icon: IoIosLogOut,
        path: "#"
    },
]

const PanelSelectorUser = () => {
    const { setProfilePanelOpen } = useUIProfile()
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center mx-auto">
                <img className="w-[44px] h-[44px] rounded-full" src="https://secure.gravatar.com/avatar/a472015758f3f4ae3b7591b377836177?s=60&d=mm&r=g" alt="" />
                <p className="font-semibold text-[#888888]">gonzaloaxelcode</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                {panel_links.map((el: any, index: number) => {
                    const Icon = el.icon
                    return <div key={index} className="relative" onClick={() => setProfilePanelOpen(false)}>
                        <div onClick={() => setProfilePanelOpen(false)} className="bg-red-500 py-6 px-6 rounded-md flex flex-col gap-1 items-center justify-center">
                            <Icon className="w-[52px] h-[52px] fill-white" />
                            <p className="text-white">{el.name}</p>
                        </div>
                        <Link onClick={() => setProfilePanelOpen(false)} className="inset-0 absolute" href={el.path}></Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PanelSelectorUser