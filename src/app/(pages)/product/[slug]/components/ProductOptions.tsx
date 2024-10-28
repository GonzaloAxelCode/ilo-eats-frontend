"use client"
import Button from "@/app/main/components/Buttons";
import Checkbox from "@/app/main/components/ChecksAndRadios/CheckboxOption";
import CustomRadio from "@/app/main/components/ChecksAndRadios/CustomRadio";
import { useState } from "react";


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

const ProductOptions = () => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedCrust, setSelectedCrust] = useState(product.crusts[0]);
    const [selectedExtras, setSelectedExtras] = useState(new Set());
    const [quantity, setQuantity] = useState<number>(1)

    const toggleExtra = (extra: any) => {
        const newExtras = new Set(selectedExtras);
        if (newExtras.has(extra)) {
            newExtras.delete(extra);
        } else {
            newExtras.add(extra);
        }
        setSelectedExtras(newExtras);
    };

    const calculateTotalPrice = () => {
        let total = product.original_price;
        total += selectedSize.price;
        total += selectedCrust.price;
        selectedExtras.forEach((extra) => {
            const extraItem = product.extras.find((e) => e.name === extra);
            if (extraItem) {
                total += extraItem.price;
            }
        });
        return total.toFixed(2);
    };

    return (
        <div>

            <h3>Sizes:</h3>
            {product.sizes.map((size) => (
                <CustomRadio
                    key={size.medida}
                    label={`${size.medida} inches`}
                    isSelected={selectedSize.medida === size.medida}
                    onClick={() => setSelectedSize(size)}
                    selectedStyle={{
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: 'blue',
                        containerColor: 'rgba(59, 130, 246, 0.1)',
                    }}
                />
            ))}
            <h3>Crusts:</h3>
            {product.crusts.map((crust) => (
                <CustomRadio
                    key={crust.name}
                    label={crust.name}
                    isSelected={selectedCrust.name === crust.name}
                    onClick={() => setSelectedCrust(crust)}
                    selectedStyle={{
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: 'blue',
                        containerColor: 'rgba(59, 130, 246, 0.1)',
                    }}
                />
            ))}
            <h3>Extras:</h3>
            {product.extras.map((extra) => (
                <Checkbox
                    key={extra.name}
                    label={`${extra.name} (+$${extra.price})`}
                    checked={selectedExtras.has(extra.name)}
                    onChange={() => toggleExtra(extra.name)}
                />
            ))}
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <div className="flex">
                <div>
                    <span onClick={() => setQuantity((prev: number) => prev + 1)}>+</span>
                    <span>{quantity}</span>
                    <span onClick={() => setQuantity((prev: number) => Math.max(prev - 1, 0))}>-</span>
                </div>
                <Button type="secondary" label="ORDER" />
                <button>

                </button>
            </div>
        </div>
    );
};

export default ProductOptions;
