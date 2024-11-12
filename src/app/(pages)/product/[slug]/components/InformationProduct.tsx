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
            <h1 className="text-3xl font-bold">{info_data_product.title}</h1>
            <p className="text-[#888888] text-sm mt-4">{info_data_product.description}</p>
            <div>
                <p className="text-sm my-6"> Serving size: <span className="text-[#888888]">{info_data_product.serving_size}</span></p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-2 max-w-[430px]">
                {info_data_product.nutritional_data.map((el: any, index: number) => {
                    return <div key={index} className="flex flex-col items-start  flex-1 gap-1">
                        <span className="text-[#888888] font-normal uppercase text-center text-sm">{el.name}</span>
                        <span className="font-normal text-center text-sm">
                            {el.amount} {el.unit}
                        </span>
                        <span className="text-[#888888] text-sm">{el.percentDI} <sup>*</sup></span>
                        <span className="font-normal text-center text-sm">
                            {el.amount} {el.unit}
                        </span>
                    </div>
                })}
                <span className="text-[#888888] text-xs mt-2"> <sup>*</sup>DI: Recommended Daily Intake based on 2000 calories diet
                </span>
                <p className="text-xs my-2">Allergens: Milk, Eggs, Soy, Glutten</p>
            </div>
        </div>
    )
}

export default InformationProduct