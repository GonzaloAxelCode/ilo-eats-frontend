"use client"

import Button from "@/app/main/components/Buttons"
import BurguerIcon from "@/app/main/ui/icons/BurguerIcon"
import Image from "next/image"
import Link from "next/link"
import ItemNavCategory from "./ItemNavCategory"
const data_pizzas = [{
    name: "LEGENDARY DEEP DISH",
    image: "menu-banner-deep.jpg",
    path: "#"
}, {
    name: "LEGENDARY DEEP SLICEa",
    image: "menu-banner-slice.jpg", path: "#"
}, {
    name: "LEGENDARY DEEP THINa",
    image: "menu-banner-thin.jpg",
    path: "#"
}]
const data_burgers = [{
    name: "LEGENDARY DEEP DISH",
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/menu-banner-angus.jpg",
    path: "#"
}, {
    name: "LEGENDARY DEEP SLICEa",
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/menu-banner-paleo.jpg", path: "#"
}, {
    name: "LEGENDARY DEEP THINa",
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/menu-banner-egster.jpg",
    path: "#"
}]
const FloatNavigationCategories = () => {
    const offset = 0
    return (
        <div className="z-10 absolute left-1/2 top-[12rem]   -translate-x-1/2 mx-auto w-[1269px] max-w-[1360px]">
            <div
                className={`relative bg-[#ffca3c] flex justify-center rounded-[8px] transition-all duration-200  py-2
        ${offset === 0 ? " overflow-visible" : "max-h-0 overflow-hidden"}`}
            >

                <div className="absolute content-[''] bottom-[20px] left-[20px] w-[50%] top-[40px] shadow-[0_15px_13px_rgba(51,51,51,1)] rotate-[-2deg] z-[-1]" />
                <div className="absolute content-[''] bottom-[20px] right-[20px] w-[50%] top-[40px] shadow-[0_15px_13px_rgba(51,51,51,1)] rotate-[2deg] z-[-1]" />


                <ItemNavCategory
                    label="PIZZA"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/pizzas"
                    contentClassName="bg-red"
                >
                    <div className=" flex gap-3 p-4">
                        <div className="flex gap-3">
                            {data_pizzas.map((el: any, index: any) => {
                                return <div key={index} className="relative text-center mx-auto p-4">

                                    <Image src={`/images/Food/${el.image}`} alt={el.name} width={270} height={270} className="" />

                                    <p>{el.name}</p>
                                    <Link
                                        href={el.path}
                                        className="absolute inset-0 z-10"
                                        aria-label={el.name}
                                    ></Link>
                                </div>
                            })}
                        </div>
                        <div className="flex flex-col gap-3 w-[20%] p-4">
                            <h4 className="font-bold text-md">About Our Pizza</h4>
                            <p className="text-sm">With a more “contemporary” style, our gourmet pizzas are where the creativity of our pizza chefs shines.

                            </p>
                            <p className="text-sm">Every Pizza on Lafka can be made with buttery flaky crust or 100% whole-grain crust and even vegan friendly gluten-free dough.

                            </p>
                            <div>

                                <Button type="order" label="Construye tu pizza" />
                            </div>

                        </div>
                    </div>
                </ItemNavCategory>
                <ItemNavCategory
                    label="BURGERS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/burgers"

                >
                    <div className=" flex gap-3 p-4">
                        <div className="flex gap-3">
                            {data_burgers.map((el: any, index: any) => {
                                return <div key={index} className="relative text-center mx-auto p-4">


                                    <Image
                                        src={el.image.startsWith('https') ? el.image : `/images/Food/${el.image}`}
                                        alt={el.name}
                                        width={270}
                                        height={270}
                                        className=""
                                    />
                                    <p>{el.name}</p>
                                    <Link
                                        href={el.path}
                                        className="absolute inset-0 z-10"
                                        aria-label={el.name}
                                    ></Link>
                                </div>
                            })}
                        </div>
                        <div className="flex flex-col gap-3 w-[20%] p-4">
                            <h4 className="font-bold text-md">About Our Pizza</h4>
                            <p className="text-sm">With a more “contemporary” style, our gourmet pizzas are where the creativity of our pizza chefs shines.

                            </p>
                            <p className="text-sm">Every Pizza on Lafka can be made with buttery flaky crust or 100% whole-grain crust and even vegan friendly gluten-free dough.

                            </p>
                            <div>

                                <Button type="order" label="Construye tu pizza" />
                            </div>

                        </div>
                    </div>
                </ItemNavCategory>
                <ItemNavCategory
                    label="SANDWICHES"
                    contentPositionFull
                    opacityAnimate
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/sandwiches"

                >
                    <div className="p-10 w-[300px] text-sm">
                        <Link href="#" className="flex gap-3 items-center my-2 py-1">

                            <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                            <p>Classic Subs</p>
                        </Link>
                        <Link href="#" className="flex gap-3 items-center my-2  py-1">

                            <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                            <p>Classic Subs</p>
                        </Link>
                        <Link href="#" className="flex gap-3 items-center my-2  py-1">

                            <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                            <p>Classic Subs</p>
                        </Link>
                        <Link href="#" className="flex gap-3 items-center my-2  py-1">

                            <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                            <p>Classic Subs</p>
                        </Link>
                    </div>
                </ItemNavCategory>
                <ItemNavCategory
                    label="SIDES & SALADS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/sides-salads"
                />
                <ItemNavCategory
                    label="COMBOS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/combos"
                    rtl
                >
                    <div className="flex gap-4 p-8">
                        <Image
                            src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/menu-banner-craving.jpg"
                            alt=""
                            width={550}
                            height={290}
                            className=""


                        />
                        <div className="p-10 w-[200px] text-sm">
                            <Link href="#" className="flex gap-3 items-center my-2 py-1">

                                <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                                <p>Classic Subs</p>
                            </Link>
                            <Link href="#" className="flex gap-3 items-center my-2  py-1">

                                <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                                <p>Classic Subs</p>
                            </Link>
                            <Link href="#" className="flex gap-3 items-center my-2  py-1">

                                <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                                <p>Classic Subs</p>
                            </Link>
                            <Link href="#" className="flex gap-3 items-center my-2  py-1">

                                <BurguerIcon className="w-[25px] h-[25px] opacity-50" />
                                <p>Classic Subs</p>
                            </Link>
                        </div>
                    </div>
                </ItemNavCategory>
                <ItemNavCategory
                    label="DRINKS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/drinks"

                />
                <ItemNavCategory
                    label="DESSERTS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/drinks"

                />



            </div>
        </div>
    )
}

export default FloatNavigationCategories