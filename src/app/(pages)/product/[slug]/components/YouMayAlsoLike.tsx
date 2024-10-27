"use client"

import Button from "@/app/main/components/Buttons";
import { getDecimalPrice, getNumberPrice, nameFormat } from "@/app/utils/number-operations";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

const tempproducts = [
    {
        price: "10.00",
        name: "Bacon Chesseburger",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "drinks2.jpg",
        isfavorite: false,
        stars: 5,
    },
    {
        price: "1.99",
        name: "Jalapeno Angus Burger",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "side5.jpg",
        isfavorite: false,
        stars: 5,
    },
    {
        price: "32.10",
        name: "Bacon Chesseburger",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "side6.jpg",
        isfavorite: false,
        stars: 5,
    },
];

const YouMayAlsoLike = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-16">
            <p className="text-lg font-semibold flex-2 mb-6 md:mb-0 text-center">You may also like…</p>
            <div className="flex-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {tempproducts.map((burger, index) => (
                    <div key={index} className="p-5 flex flex-col justify-self-center bg-white rounded-lg shadow-md">
                        <div className="relative border border-gray-300 rounded-lg overflow-hidden">
                            <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                                <span>
                                    ${getNumberPrice(burger.price)}
                                    <sup>.{getDecimalPrice(burger.price)}</sup>
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4 cursor-pointer">
                                <BiHeart className="w-6 h-6 text-gray-600" />
                            </div>
                            <Link href={`/fastfood/product/${nameFormat(burger.name)}`}>

                                <Image
                                    src={`/images/Food/${burger.imageLocal}`}
                                    alt={burger.name}
                                    width={250}
                                    height={250}
                                    layout="responsive"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />

                            </Link>
                        </div>

                        <div className="text-center px-5 py-3">
                            <Link href={`/fastfood/product/${nameFormat(name)}`}>

                                <p className="font-semibold text-base text-gray-800 mb-2">{burger.name}</p>

                            </Link>
                            <p className="text-sm text-gray-600 leading-relaxed">{burger.description}</p>
                        </div>

                        <div className="mx-auto mt-3">
                            <Button type="order" onClick={() => null}>
                                Order Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YouMayAlsoLike