
const InformationProduct = ({ title, description, serving_size = "", nutritional_data = [] }: any) => {
    return (
        <div className="p-6 mx-auto">
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                <p> Serving size: {serving_size}</p>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 p-4">
                {nutritional_data.map((el: any, index: number) => {
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