import Image from "next/image"
import Link from "next/link"

const combos_data = [
    {
        text: "SAVE 30%",
        subtext: "BURG'R COMBO",
        description: "Sides and drinks at a slashed price",
        bgimage: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/banner-home-burger.jpg",
        path: "#"

    },
    {
        text: "CRISPY",
        subtext: "BURG'R COMBO",
        description: "Sides and drinks at a slashed price",
        bgimage: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/banner-home-chicken.jpg",
        path: "#"

    },
    {
        text: "HALF & HALF",
        subtext: "YUMMY PIZZA",
        description: "Sides and drinks at a slashed price",
        bgimage: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/banner-home-pizza.jpg",
        path: "#"
    },
]

const FoodCombos = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 pt-20 pr-6 pb-11 pl-6">
            {combos_data.map((el: any, index: number) => {
                return <div key={index} className="py-8 px-3">
                    <div className=" object-contain overflow-hidden h-52 sm:h-96  md:h-full min-h-52   flex-1 relative flex items-center justify-center ">
                        <div className="absolute left-0 z-10 max-w-[50%] ">
                            <h4 className="text-2xl font-bold text-[#F2002d]">{el.text}</h4>
                            <h4 className="text-2xl font-fold text-[#333333]">{el.subtext}</h4>
                            <p className="text-sm text-[#888888]">{el.description}</p>
                        </div>
                        <Link href={el.path} className="inset-1 absolute z-10"></Link>
                        <Image className="absolute object-contain" src={el.bgimage} width={640} height={359} alt={el.text} />


                    </div>
                </div>
            })}
        </div>
    )
}

export default FoodCombos