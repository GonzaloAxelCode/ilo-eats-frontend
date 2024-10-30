const info_data_product = {
    title: "Big Brekkie BBQ Burger",
    description: "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
    serving_size: "320g",
    nutritional_data: [
        {
            name: "Energy",
            amount: 570,
            unit: "Cal",
            DI: 29,
            percentDI: "29%"
        },
        {
            name: "Protein",
            amount: 32,
            unit: "g",
            DI: 64,
            percentDI: "64%"
        },
        {
            name: "Fat",
            amount: 13,
            unit: "g",
            DI: 17,
            percentDI: "17%"
        },
        {
            name: "Sat Fat",
            amount: 2.0,
            unit: "g",
            DI: 10,
            percentDI: "10%"
        },
        {
            name: "Carbs",
            amount: 19,
            unit: "g",
            DI: 7,
            percentDI: "7%"
        }
    ]

}

const InformationProduct = () => {

    return (
        <div className="p-6 mx-auto">
            <h1>{info_data_product.title}</h1>
            <p>{info_data_product.description}</p>
            <div>
                <p> Serving size: {info_data_product.serving_size}</p>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 p-4">
                {info_data_product.nutritional_data.map((el: any, index: number) => {
                    return <div key={index} className="flex flex-col items-center">
                        <span className="font-semibold">{el.name}</span>
                        <span>
                            {el.amount} {el.unit}
                        </span>
                        <span className="text-gray-500">{el.percentDI}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default InformationProduct