

const data_overview = [
    {
        title: "Friendly Service",
        description: "Filet mignon buffalo shankle leberkas, porchetta frankfurter.",

        image: "https://cdn-icons-png.flaticon.com/512/9862/9862096.png"
    },
    {
        title: "Original Recipes",
        description: "Filet mignon buffalo shankle leberkas, porchetta frankfurter.",

        image: "https://cdn-icons-png.flaticon.com/512/9862/9862096.png"
    },
    {
        title: "Free Parking Lot",
        description: "Filet mignon buffalo shankle leberkas, porchetta frankfurter.",

        image: "https://cdn-icons-png.flaticon.com/512/9862/9862096.png"
    },
    {
        title: "Fast Delivery",
        description: "Filet mignon buffalo shankle leberkas, porchetta frankfurter.",
        image: "https://cdn-icons-png.flaticon.com/512/9862/9862096.png"
    },
]
const ServiceOverview = () => {
    return (
        <div className="py-20 px-8">
            <div className="flex gap-4 justify-center  items-center flex-col sm:flex-row">
                {data_overview.map((el: any, index: number) => {
                    return <div className="flex flex-col justify-center items-center gap-3" key={index}>
                        <img className="w-[70px] h-[70px]" src={el.image} alt="" />
                        <p className="text-center font-bold ">{el.title}</p>
                        <p className="text-center text-gray-500">{el.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ServiceOverview