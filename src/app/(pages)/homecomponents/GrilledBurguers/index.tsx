
"use client"
import Button from "@/app/main/components/Buttons";
import { useUIProductOrder } from "@/app/main/uihooks/useUIProductOrder";
import { getDecimalPrice, getNumberPrice, nameFormat } from "@/app/utils/number-operations";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

export const data_burgers = [
    {
        idProduct: "dcjf8wfdfs9fsfsdf",
        name: "Jalapeno Angus Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "puscan-pizza.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },

    {
        idProduct: "dew8jw89fjerf8efefef",
        name: "Bacon Chesseburger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        isfavorite: false,
        stars: 5,
        imageLocal: "bacon-chesseburger.jpg",
        price: 6.99,
        stock: 1000,
        sizes: [{ medida: "12", price: 0 }],
        crusts: [{ name: "Thin Crust", price: 0 }],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },

    {
        idProduct: "sdkadasd8adasdasd",
        name: "Big Brekkie BBQ Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "bacon-chesseburger.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },
    {
        idProduct: "ecwmefcwe98cjwe9d",
        name: "Portobello ‘Shroom Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "bacon-chesseburger.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },
    {
        idProduct: "cjw9cwe9cjw9ecuw98e",
        name: "Western Bacon Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "jalapeno-angus-burger.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },
    {
        idProduct: "cwcujed7fhw8dfhwec99",
        name: "Original Angus Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "bacon-chesseburger.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },
    {
        idProduct: "cjwecw9ecedede7fedfer",
        name: "Portobello ‘Shroom Burger",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "jalapeno-angus-burger.jpg",
        isfavorite: false,
        stars: 5,
        price: 11.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
            { name: "Sausage", price: 0.5 },
            { name: "Mushrooms", price: 0.5 },
            { name: "Onions", price: 0.6 },
            { name: "Green Peppers", price: 0.4 },
            { name: "Other ", price: 0.2 },
            { name: "Potatos", price: 1.5 },
        ],
    },
    {
        idProduct: "cwecf7hwefwc9",
        name: "Burguer AFK",
        description:
            "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
        imageLocal: "jalapeno-angus-burger.jpg",
        isfavorite: false,
        stars: 5,
        price: 90.99,
        stock: 1000,
        sizes: [
            { medida: "12", price: 0 },
            {
                medida: "15",
                price: 0,
            },
            { medida: "18", price: 0 },
        ],
        crusts: [
            { name: "Thin Crust", price: 0 },
            { name: "Stuffed Crust", price: 0 },
            { name: "Deep Dish", price: 0 },
        ],
        extras: [
            { name: "Chesse", price: 1 },
            { name: "Pepperoni", price: 1 },
        ],
    },
];

export const cartTemp = {
    items: [
        {
            idProduct: "gmorv789vy789h789nj",
            name: "Jalapeno Angus Burger",
            priceUnit: 5.49,
            size: { medida: "12", price: 0 },
            imageLocal: "bacon-chesseburger.jpg",
            quantity: 6,
            customOptions: {
                crusts: { name: "Deep Dish", price: 1 },
                extraToppings: [
                    { name: "Sausage", price: 0.5 },
                    { name: "Mushrooms", price: 0.5 },
                    { name: "Onions", price: 0.6 },
                    { name: "Green Peppers", price: 0.4 },
                ],
            },
        },
    ],
};



const GrilledBurguers = () => {
    const { openProductOrder } = useUIProductOrder()
    return (
        <div >

            <div className="w-full py-20">
                <h1 className="text-center text-4xl font-bold mx-auto">CHAR-GRILLED BURGERS</h1>
                <p className="text-center text-gray-500 max-w-[80%] mx-auto">Hand-crafted fresh to order. Smashed to lock in flavor on a toasted brioche bun.
                    Served with garlic dill pickles & fries.</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
                {data_burgers.map((el: any, index: number) => {
                    return <div key={index}>
                        <div className="p-5 flex flex-col items-center bg-cover">
                            <div className="relative border rounded-lg overflow-hidden border-gray-200">
                                <div className="absolute left-4 top-4 bg-brown-800 text-white rounded-md px-2 py-1 z-10">
                                    <span className="text-sm font-bold">
                                        {getNumberPrice(el.price)}
                                        <sup className="text-xs">{getDecimalPrice(el.price)}</sup>
                                    </span>
                                </div>
                                <div className="absolute bottom-0 right-0 p-4 cursor-pointer z-10">
                                    <BiHeart className="w-6 h-6 fill-current text-gray-800" />
                                </div>
                                <Link href={`/fastfood/product/${nameFormat(el.name)}`}>

                                    <Image
                                        src={`/images/Food/${el.imageLocal}`}
                                        alt={el.name}

                                        width={300}
                                        height={300}
                                        objectFit="contain"
                                        className="w-full h-full"
                                    />

                                </Link>
                            </div>

                            <div className="text-center px-5 py-4">
                                <Link href={`/fastfood/product/${nameFormat(el.name)}`}>

                                    <p className="font-medium text-lg text-gray-800 mb-2">{el.name}</p>

                                </Link>
                                <p className="text-sm text-gray-500 leading-relaxed">{el.description}</p>
                            </div>

                            <div className="btn-order m-auto">
                                <Button type="order" label="Order Now" onClick={() => openProductOrder()} />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GrilledBurguers