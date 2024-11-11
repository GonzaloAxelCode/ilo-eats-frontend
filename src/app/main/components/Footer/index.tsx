import Link from "next/link";
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import {
    AiFillPhone,
    AiOutlineFieldTime,
    AiOutlineHeatMap,
    AiTwotoneMail,
    AiTwotonePhone,
} from "react-icons/ai";

export const LINKS = {
    infomation: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Our Menu", link: "/menu" },
        { name: "Blog", link: "/blog" },
        { name: "Caontacs", link: "/contact" },
    ],
    extras: [
        { name: "My Order", link: "/orders" },
        { name: "Checkout", link: "/terms" },
        { name: "Catering", link: "/catering" },
        { name: "Our locations", link: "/locations" },
        { name: "Privacy Policy", link: "/privacy" },
    ],
    getInTouch: [
        {
            name: "Mon. - Sun.: 10:00 - 23:00",
            Icon: AiOutlineFieldTime,
            link: null,
        },

        {
            name: "164 7th Avenue, Seattle, WA 9801",
            Icon: AiOutlineHeatMap,
            link: null,
        },
        { name: "+1.888.292.7171", Icon: AiFillPhone, link: null },
        { name: "+1.888.292.7172", Icon: AiTwotonePhone, link: null },
        { name: "orders@pizza.com", Icon: AiTwotoneMail, link: "/correo" },
    ],
};

export const cards = [
    {
        nameCard: "american-expresss",
    },
    {
        nameCard: "circus",
    },
    {
        nameCard: "maestro",
    },
    {
        nameCard: "mastercard",
    },
    {
        nameCard: "visa",
    },
    {
        nameCard: "cash-delivery",
    },
    {
        nameCard: "directy-debit",
    },
    {
        nameCard: "paypal",
    },
];



export default function Footer() {
    return (
        <footer className="bg-[#2a2a2a] relative ">
            <div className="flex justify-between flex-wrap p-20 pt-16 pb-8">
                <ListLinks title="Information" links={LINKS.infomation} />
                <ListLinks title="Extras" links={LINKS.extras} />
                <ListLinks title="Get In Touch" links={LINKS.getInTouch} />
                <div className="text-white">
                    <h3 className="relative text-white text-lg font-bold mb-10">
                        We Accept
                        <span className="absolute bottom-[-12px] left-0 block w-12 h-0.5 bg-[#f2002d]"></span>
                    </h3>
                    <div className="grid grid-cols-4 gap-2 w-72">
                        {cards.map((card: any, index: number) => (
                            <span key={index} className={`w-12 h-8 bg-no-repeat bg-center ${card.nameCard}`} style={{ backgroundImage: "url('/images/Otros/cards.png')" }}></span>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-[#222222] flex items-center justify-between p-8">

                <div className="flex space-x-3">
                    <Link href="/" passHref>
                        <AiFillFacebook className="text-white w-8 h-8 transition-opacity duration-300 hover:opacity-80" target="_blank" />
                    </Link>
                    <Link href="/" passHref>
                        <AiFillYoutube className=" text-white w-8 h-8 transition-opacity duration-300 hover:opacity-80" target="_blank" />
                    </Link>
                    <Link href="/" passHref>
                        <AiOutlineTwitter className="text-white  w-8 h-8 transition-opacity duration-300 hover:opacity-80" target="_blank" />
                    </Link>
                    <Link href="/" passHref>
                        <AiOutlineInstagram className="text-white w-8 h-8 transition-opacity duration-300 hover:opacity-80" target="_blank" />
                    </Link>
                </div>

                <p className="text-xs text-[#aeaeae] font-normal"> Gonzalo Axel | © 2024 All rights reserved!</p>
            </div>
        </footer>
    );
}

function ListLinks({ title, links }: any) {
    return (
        <div className="pl-12 md:pl-0">
            <h3 className="relative text-white text-lg font-bold mb-10">
                {title}
                <span className="absolute bottom-[-12px] left-0 block w-12 h-0.5 bg-[#f2002d] z-2"></span>
            </h3>
            <ul className="p-0">
                {links.map((En: any, index: number) => {
                    const { Icon, link, name } = En;
                    return link !== null ? (
                        <Link key={index} href={link} passHref className="flex items-center text-[#f5f5f5] text-sm py-2 transition-transform duration-300 hover:translate-x-2">

                            {Icon && <Icon className="w-4 h-4 mr-1" />}
                            {name}

                        </Link>
                    ) : (
                        <li key={index} className="flex items-center text-[#aeaeae] text-sm py-2 no-link">
                            {Icon && <Icon className="w-4 h-4 mr-1" />}
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}