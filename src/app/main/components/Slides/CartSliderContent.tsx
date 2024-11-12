
"use client"
import { getDecimalPrice, getNumberPrice } from "@/app/utils/number-operations";

import Image from "next/image";
import Link from "next/link";
import { FiCreditCard, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useUICart } from "../../uihooks/useUICart";
import Button from "../Buttons";

const product = {
    idProduct: "dcjf8wfdfs9fsfsdf",
    name: "Jalapeno Angus Burger",
    description:
        "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch fries",
    imageLocal: "puscan-pizza.jpg",
    isfavorite: false,
    stars: 5,
    original_price: 11.99,
    stock: 1000,
    priceUnit: 10,
    sizes: [
        { medida: "12", price: 0 },
        { medida: "15", price: 2 },
        { medida: "18", price: 4 },
    ],
    crusts: [
        { name: "Thin Crust", price: 1 },
        { name: "Stuffed Crust", price: 2 },
        { name: "Deep Dish", price: 3 },
    ],
    extras: [
        { name: "Chesse", price: 1 },
        { name: "Pepperoni", price: 1 },
        { name: "Sausage", price: 0.5 },
        { name: "Mushrooms", price: 0.5 },
        { name: "Onions", price: 0.6 },
        { name: "Green Peppers", price: 0.4 },
        { name: "Other", price: 0.2 },
        { name: "Potatos", price: 1.5 },
    ],
};

const cart_data = {
    items: [
        {
            id: 1,

            quantity: 6,
            customOptions: {
                negativeAddons: [
                    {
                        name: "No Chesse",
                        price: -1,
                    },
                    {
                        name: "Extra Cheddar",
                        price: 1,
                    },
                    {
                        name: "Extra Cheddar",
                        price: 1,
                    },
                ],
                extraToppings: [
                    {
                        name: "Fried Onion ",
                        price: 0.5,
                    },
                    {
                        name: "Fried Onion ",
                        price: 0.7,
                    },
                ],
            },
            optionsPrice: 30,
            subtotal: 20,
            product

        },

    ],
};


const CartDownSliderContent = () => {


    const t = cart_data.items.reduce((acc: any, el: any) => acc + el.subtotal, 0);
    const total = t.toFixed(2);
    const { setCartOpen } = useUICart()
    return (
        <div>
            <div className="mx-auto p-4 flex flex-col h-full justify-around items-center w-[calc(100%-40px)] max-w-[600px] transition-all duration-600">
                {cart_data.items && (
                    <div className="w-full border-t border-b border-gray-200 mt-12 overflow-y-auto h-[55vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                        {cart_data.items.map((item_cart: any) => (
                            <div key={item_cart.product.idProduct} className="flex items-center justify-between border-b border-gray-200 p-4">
                                <div className="flex items-start p-4 space-x-4">
                                    <div onClick={() => setCartOpen(false)}>
                                        <Link href={`/fastfood/product/${item_cart.product.name}`}>

                                            <div className="border border-gray-300 rounded-lg overflow-hidden w-16 h-16">
                                                <Image src={`/images/Food/${item_cart.product.imageLocal}`} alt={item_cart.product.name} layout="responsive" width={60} height={60} />
                                            </div>

                                        </Link>
                                    </div>
                                    <div className="flex flex-col ml-4 flex-1">
                                        <div onClick={() => setCartOpen(false)}>
                                            <Link href={`/fastfood/product/${item_cart.product.name}`}>

                                                <p className="text-gray-800 font-medium text-sm mb-1">{item_cart.product.name}</p>

                                            </Link>
                                        </div>
                                        {item_cart.customOptions?.extraToppings && (
                                            <div className="flex flex-col flex-wrap text-gray-500 text-xs space-x-1">
                                                <p className="ml-1 font-semibold">Extra Toppings:</p>
                                                <div className="flex flex-col">


                                                    {item_cart.customOptions.extraToppings.map((option: any, index: any) => {
                                                        return <p key={index}>
                                                            {option.name}
                                                            <span>
                                                                <span className="text-xs">$</span>{option.price} <sup>.00</sup>
                                                            </span>
                                                        </p>
                                                    })}

                                                </div>
                                            </div>
                                        )}
                                        <div className="text-red-600 font-semibold text-sm">
                                            {item_cart.quantity} x <span>${item_cart.product.priceUnit}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer ml-4">
                                    <FiTrash2 />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-between items-center w-full mt-8 p-4">
                    <p className="text-gray-500 font-medium text-lg">Subtotal</p>
                    <div className="text-gray-900 font-semibold text-lg">
                        <span>
                            <span>$</span>{getNumberPrice(total)}<sup>.{getDecimalPrice(total)}</sup>
                        </span>
                    </div>
                </div>
                <div className="flex w-full gap-3">


                    <Link href="/cart" className="w-full">

                        <Button
                            type="primary"
                            className="w-full"
                        >
                            <FiShoppingBag className="mr-2" />
                            <span>

                                VIEW CART
                            </span>

                        </Button>

                    </Link>
                    <Link href="/checkout" className="w-full">


                        <Button
                            type="secondary"
                            className="w-full"
                        >
                            <FiCreditCard className="mr-2" />
                            <span>
                                CHECKOUT
                            </span>

                        </Button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CartDownSliderContent