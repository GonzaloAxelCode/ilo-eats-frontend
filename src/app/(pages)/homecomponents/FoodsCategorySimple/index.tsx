"use client"
import CustomCarousel from "@/app/utils/custom-carrousel"
import Image from "next/image"

const categories_data = [{
    image: "/images/Food/cat-burger1.jpg",
    name: "BURGERS",
    path: "#"
}, {
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/cat-pizza1-440x440.jpg",
    name: "PIZZA",
    path: "#"
}, {
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/cat-sandwiches1-440x440.jpg",
    name: "SANDWICHES",
    path: "#"
}, {
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/cat-sides1-440x440.jpg",
    name: "SIDES",
    path: "#"
}, {
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/cat-dessert1-440x440.jpg",
    name: "DESERTS",
    path: "#"
}, {
    image: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/cat-drinks1-440x440.jpg",
    name: "DRINKS",
    path: "#"
}
]
const FoodsCategorySimple = () => {
    const handleDragStart = (e: any) => {
        e.preventDefault();
    };
    return (
        <div className="py-12">
            <CustomCarousel

                className="w-screen "
                itemPadding={[0, 20]}
                breakPoints={[{ width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2, },
                { width: 850, itemsToShow: 3 },
                { width: 1150, itemsToShow: 4, },
                { width: 1450, itemsToShow: 5 },
                { width: 1750, itemsToShow: 6 },]}
                itemsToShow={6}
                pagination={false}
                outerSpacing={0}
                itemsToScroll={1}
                isRTL={false}
                showEmptySlots={false}

                showArrows
            >
                {categories_data.map((el: any, index: number) => {
                    return <div key={index} className="relative select-none ">
                        <Image onDragStart={handleDragStart}
                            draggable={false} className="select-none object-contain" src={el.image} width={226} height={226} alt={el.name} />


                        <p className="cursor-pointer text-center mx-auto text-sm font-bold">{el.name}</p>
                        <span className="absolute inset-0 z-10 select-none"
                        ></span>

                    </div>
                })}

            </CustomCarousel>

        </div>
    )
}

export default FoodsCategorySimple