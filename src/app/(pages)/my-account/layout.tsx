"use client"
import ContentTitleHolder from "@/app/main/components/ContentTitleHolder";
import Link from "next/link";

import { usePathname } from 'next/navigation';
import LayoutClient from "../layout-client";

import { FaRegAddressBook } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { TfiDashboard } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

const data_links_profile = [
    {
        name: "Dashboard",
        icon: TfiDashboard,
        path: "/my-account"
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

const LayoutProfile = ({ children }: any) => {

    const pathname = usePathname()

    return (
        <LayoutClient>
            <ContentTitleHolder title="My account" />
            <div className="relative mx-auto max-w-screen-xl flex pt-20 ">
                <div className="sticky top-20 ">
                    <div className=" flex flex-col gap-6 min-w-[250px] pb-20">
                        {data_links_profile.map((el: any, index: number) => {
                            const Icon = el.icon;
                            const isActive = pathname === el.path;

                            return (
                                <div key={index}>
                                    <Link href={el.path} className="flex items-center gap-3">
                                        <Icon
                                            className="w-[24px] h-[24px] fill-gray-400"
                                        />
                                        <span className={` font-medium ${isActive ? "text-red-500" : ""}`}>{el.name}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div>
                    {children}
                </div>
            </div>
        </LayoutClient>
    )
}

export default LayoutProfile;
