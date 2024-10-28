"use client"

import GroupCombo from "./GroupCombo"



const data_combo = {
    combo_title: "Add More Products With Discount Combo",
    combo_description: "Dynamic Combo product with one main product as required and several optional products. If purchased, the additional products are discounted.",
    combo_image: "https://lafka.althemist.com/fastfood/wp-content/up…es/2/2021/06/burger-combo-slide-final-680x581.png",
    combos_list: [
        {
            id: 1,
            title: "Choose Your Burger",
            description: "With a more “contemporary” style, our gourmet pizzas are where the creativity of our pizza chefs shines.",
            image: "",
            category: "",
            products: [
                {
                    idProduct: "dcjf8wfdfs9fsfsdfasdasd",
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

                    ],
                },
                {
                    idProduct: "dcjf8wfdfs9fsfsdffhgjfh",
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
                }
            ]
        },
        {
            id: 2,
            title: "Choose Your Side",
            description: "With a more “contemporary” style, our gourmet pizzas are where the creativity of our pizza chefs shines.",
            image: "	https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/side5-11-440x440.jpg",
            category: "",
            products: [
                {
                    idProduct: "dcjf8wfdfs9fsfsdfs",
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
                },
                {
                    idProduct: "dcjf8wfdfs9fsfsdfaa",
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
                }
            ]
        },
    ]
}

const ListCombos = () => {
    return (
        <div>
            <h2>{data_combo.combo_title}</h2>
            <p>{data_combo.combo_description}</p>
            {data_combo.combos_list.map((combo_list: any, index: number) => {
                return <div key={index}>
                    <GroupCombo combo_list={combo_list} />
                </div>
            })}
            <GroupCombo />
        </div>
    )
}

export default ListCombos