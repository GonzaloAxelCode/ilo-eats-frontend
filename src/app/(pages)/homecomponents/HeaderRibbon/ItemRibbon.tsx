import ArrowDown from '@/app/main/ui/icons/ArrowDown';
import Link from 'next/link';
import { useState } from 'react';

const ItemRibbon = ({ links = [], children, path = "#" }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)} className="relative text-white cursor-pointer px-2 h-15 flex justify-center items-center">
            <ul className="flex items-center">
                <li className="font-[var(--font-rubik-regular)]  text-xs transition duration-250 flex items-center">
                    <Link href={path} className="uppercase">
                        {children}
                    </Link>
                    <ArrowDown className="w-3 h-3" />
                </li>

                {isOpen && <div className="absolute top-[90%] left-[-5%] w-[200px] z-[99999] hidden md:block">
                    {links.map((link: any, key: number) => (
                        <div
                            key={key}
                            className="bg-white text-blackribbon hover:text-white border-gray-200 transition duration-250 rounded-[3px] last:border-b-0 hover:bg-blackribbon"
                        >
                            <Link href={link.link}>
                                <span className="flex items-center h-[50px] px-[10px] font-rubik-400 text-sm  no-underline">
                                    {link.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>}

            </ul>
        </div>
    )
}

export default ItemRibbon