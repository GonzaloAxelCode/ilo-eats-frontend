import Image from "next/image"

const more_greast_data = [
    {
        name: "Buffalo Chips",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side6-440x440.jpg"
    },
    {
        name: "French Fries",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "	https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side3-440x440.jpg"
    },
    {
        name: "Santa Fe Chicken Salad",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side6-440x440.jpg"
    },
    {
        name: "Onion Rings",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "	https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side3-440x440.jpg"
    },
    {
        name: "Wedges Potato",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/side6-440x440.jpg"
    },
    {
        name: "Side Fresco Salad",
        description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
        image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/salad1-440x440.jpg",
        price: "4.99",
        path: "#"

    },
]


const MoreGreatSides = () => {
    return (
        <div className="px-10">
            <div className="w-full py-20">
                <h1 className="text-center text-3xl sm:text-4xl font-bold mx-auto">MORE GREAT SIDES
                </h1>
                <p className="text-center text-gray-400 font-semibold my-3 max-w-[80%] mx-auto">
                    For every main dish, there is a perfect side.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
                <div className="flex flex-col gap-5">
                    {more_greast_data.slice(3).map((el: any, index: number) => {
                        return <div key={index} className="flex gap-3">
                            <div>
                                <Image
                                    className="object-contain"
                                    width={100}
                                    height={100}
                                    src={el.image}
                                    alt={el.name} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between  gap-2 border-gray-300 border-b-2 border-dotted border-0">
                                    <h2 className="font-normal">{el.name}</h2>
                                    <span className="font-bold">
                                        <span>$</span>4
                                        <sup>.99</sup>
                                    </span>
                                </div>
                                <div>
                                    <p className="italic text-[#888888] text-sm">{el.description}</p>
                                </div>
                                <div className="hidden"></div>
                            </div>
                            <div></div>
                        </div>
                    })}
                </div>
                <div className="flex flex-col">
                    {more_greast_data.slice(0, 3).map((el: any, index: number) => {
                        return <div key={index} className="flex gap-3">
                            <div>
                                <Image
                                    className="object-contain"
                                    width={100}
                                    height={100}
                                    src={el.image}
                                    alt={el.name} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between  gap-2 border-gray-300 border-b-2 border-dotted border-0">
                                    <h2 className="font-normal">{el.name}</h2>
                                    <span className="font-bold">
                                        <span>$</span>4
                                        <sup>.99</sup>
                                    </span>
                                </div>
                                <div>

                                    <p className="italic text-[#888888] text-sm">{el.description}</p>
                                </div>

                            </div>
                            <div></div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default MoreGreatSides