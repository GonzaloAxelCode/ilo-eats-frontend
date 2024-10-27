"use client";
import Button from "@/app/main/components/Buttons";
import CustomCarousel from "@/app/utils/custom-carrousel";
import Image from "next/image";


const carouselItems = [
    {
        backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')",
        title1: "HOT & SPICY",
        title2: "FRIED CHIKN",
        description: "Choose Your Favorite Ingredients",
        buttonLabel: "TRY COMBO PRODUCTS",
        imageUrl: "/images/Food/build-burger-slide-final.png",
        imageAlt: "Build Your Burger"
    },
    {
        backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681')",
        title1: "HOT & SPICY",
        title2: "FRIED CHIKN",
        description: "Choose Your Favorite Ingredients",
        buttonLabel: "TRY COMBO PRODUCTS",
        imageUrl: "/images/Food/build-burger-slide-final.png",
        imageAlt: "Build Your Burger Red"
    },
    {
        backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')",
        title1: "HOT & SPICY",
        title2: "FRIED CHIKN",
        description: "Choose Your Favorite Ingredients",
        buttonLabel: "TRY COMBO PRODUCTS",
        imageUrl: "/images/Food/fried-chicken-slide-final.png",
        imageAlt: "Fried Chicken"
    }
];

const HomeBannerSlider = () => {
    return (
        <CustomCarousel
            className="w-screen  BannerSlideWrapper"
            itemsToScroll={1}
            itemsToShow={1}
            enableAutoPlay
            autoPlaySpeed={5000}
            isRTL={false}
        >
            {carouselItems.map((item, index) => (
                <div
                    key={index}
                    className={` w-full min-h-full flex justify-center gap-8 items-center p-[200px_150px_10px_150px] flex-col md:flex-row  pt-[200px] pr-[10%] pb-[80px] pl-[10%] `}
                    style={{ backgroundImage: item.backgroundImage }}
                >
                    <div className="flex flex-col justify-center sm:items-center gap-4">
                        <h1 className="text-white  text-2xl md:text-6xl font-bold flex flex-col text-center">
                            <span>{item.title1}</span>
                            <span>{item.title2}</span>
                        </h1>

                        <p className="text-white text-sm text-center md:text-xl font-normal">{item.description}</p>
                        <Button type="default" label={item.buttonLabel} />
                    </div>
                    <div className="relative select-none mx-auto">
                        <Image
                            src={item.imageUrl}
                            width={550}
                            height={550}
                            alt={item.imageAlt}
                            className="object-contain select-none max-auto translate-x-[8%]"
                        />
                        <span className="absolute inset-0 z-10 select-none"></span>
                    </div>
                </div>
            ))}
        </CustomCarousel>
    );
};

export default HomeBannerSlider;
