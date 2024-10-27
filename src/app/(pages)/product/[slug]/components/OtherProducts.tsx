"use client"

import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";



const tempproducts = [
    {
        price: "$10.00",
        name: "Bacon Cheeseburger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch. Fries",
        imageLocal: "drinks2.jpg",
        isfavorite: false,
        stars: 2,
    },
    {
        price: "$1.99",
        name: "Jalapeno Angus Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch. Fries",
        imageLocal: "side5.jpg",
        isfavorite: false,
        stars: 5,
    },
    {
        price: "$32.10",
        name: "Bacon Cheeseburger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch. Fries",
        imageLocal: "side6.jpg",
        isfavorite: false,
        stars: 3,
    },
];

export default function OtherProducts() {
    return (
        <div className="flex flex-col items-center justify-center py-12">

            <h2 className="text-4xl font-bold text-gray-900 leading-snug text-center my-0">
                Other Burgers You’ll Love
            </h2>
            <div className="grid w-[80vw] gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {tempproducts.map((product, index) => (
                    <div key={index} className="relative flex flex-col items-center">
                        <Link href={`/fastfood/product/${product.name}`} className="relative block w-[174px] h-[174px] border border-gray-300 rounded-lg overflow-hidden">

                            <div className="absolute top-[-10px] right-0 z-10 p-2">
                                <ReactStars
                                    value={product.stars}
                                    size={16}
                                    edit={false}
                                    color2="#ffd700"
                                />
                            </div>
                            <Image
                                src={`/images/Food/${product.imageLocal}`}
                                layout="fill"
                                alt={product.name}
                                className="rounded-lg"
                            />

                        </Link>
                        <Link href={`/fastfood/product/${product.name}`}>
                            <span className="mt-4 text-sm font-medium text-gray-800">{product.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
