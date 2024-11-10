
"use client"
import useScroll from "@/app/main/uihooks/useScroll";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";
const LogoCenter = () => {

    const { scrollY } = useScroll()
    return (

        <div className="absolute z-40 w-[200px] top-2 left-1/2 transform -translate-x-1/2">
            <div
                className={`relative transition-all duration-300 bg-[#ffca3c] ${scrollY == 0 ? "h-[125px]" : "h-[95px]"
                    }`}
            >
                <div
                    className={`${styles.boxBefore} ${scrollY == 0 ? styles.large : styles.small
                        }`}
                />
                <Link href="/fastfood">
                    <span className="flex justify-center items-center w-full">
                        <div
                            className={`relative mt-0 object-contain transition-all duration-300 ${scrollY == 0 ? "w-[150px] h-[150px]" : "w-[110px] h-[110px]"
                                }`}
                        >
                            <Image
                                src="https://res.cloudinary.com/ddksrkond/image/upload/v1729566224/iloeats/IloEats-removebg-preview_dxfaqs.png"
                                blurDataURL="https://res.cloudinary.com/ddksrkond/image/upload/v1729566224/iloeats/IloEats-removebg-preview_dxfaqs.png"
                                alt="logo-lafka"
                                layout="fill"
                            />
                        </div>
                    </span>
                </Link>
                <div
                    className={`${styles.boxAfter} ${scrollY == 0 ? styles.large : styles.small
                        }`}
                />
            </div>
        </div>
    )
}

export default LogoCenter