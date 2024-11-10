"use client"
import { useUIProfile } from "@/app/main/uihooks/useUIProfile"
import Link from "next/link"


const panel_links = [
    {
        name: "Dashboard",
        icon: "",
        path: "/my-account#dashboard"
    },
    {
        name: "Orders",
        icon: "",
        path: "/my-account/orders"
    },
    {
        name: "Address",
        icon: "",
        path: "/my-account/edit-address"
    },
    {
        name: "Payment methods",
        icon: "",
        path: "/my-account/payment-methods"
    },
    {
        name: "Account Details",
        icon: "",
        path: "/my-account/edit-account"
    },
    {
        name: "Log Out",
        icon: "",
        path: "#"
    },
]

const PanelSelectorUser = () => {
    const { setProfilePanelOpen } = useUIProfile()
    return (
        <div className="flex flex-col gap-4">
            <div>
                <img src="" alt="" />
                <p>gonzaloaxelcode</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                {panel_links.map((el: any, index: number) => {
                    return <div key={index} className="relative" onClick={() => setProfilePanelOpen(false)}>
                        <div className="bg-red-500">
                            <span className="icon"></span>
                            <p className="text-white">{el.name}</p>
                        </div>
                        <Link className="inset-0 absolute" href={el.path}></Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PanelSelectorUser