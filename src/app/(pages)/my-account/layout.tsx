import ContentTitleHolder from "@/app/main/components/ContentTitleHolder"
import Link from "next/link"
import LayoutClient from "../layout-client"

const data_links_profile = [
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
        name: "Addresses",
        icon: "",
        path: "/my-account/edit-address"
    },
    {
        name: "Payment Methods",
        icon: "",
        path: "/my-account/payment-methods"
    },
    {
        name: "Acount Details",
        icon: "",
        path: "/my-account/edit-account"
    },
    {
        name: "Log Out",
        icon: "",
        path: "#"
    },
]

const LayoutProfile = ({ children }: any) => {
    return (
        <LayoutClient>
            <ContentTitleHolder title="My account" />
            <div className="relative mx-auto max-w-screen-xl  flex">
                <div className="flex flex-col gap-3">
                    {data_links_profile.map((el: any, index: number) => {
                        return <div key={index}>
                            <Link href={el.path}>

                                <span>{el.name}</span>
                            </Link>
                        </div>
                    })}

                </div>
                <div>
                    {children}
                </div>
            </div>
        </LayoutClient>
    )
}

export default LayoutProfile