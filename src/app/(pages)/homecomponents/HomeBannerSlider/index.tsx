"use client"
import Button from "@/app/main/components/Buttons";
import Image from "next/image";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";

interface CustomCarouselProps extends ReactElasticCarouselProps {
    children: React.ReactNode;
}
const CustomCarousel: React.FC<CustomCarouselProps> = ({
    children,
    ...props
}) => {
    return <Carousel {...props}>{children}</Carousel>;
};



const HomeBannerSlider = () => {
    return (
        <CustomCarousel
            className="w-screen BannerSlideWrapper  "
            itemsToScroll={1}
            itemsToShow={1}
            enableAutoPlay
            autoPlaySpeed={5000}
            isRTL={false}

        >

            <div
                className={`bg-cover min-h-screen w-full flex  justify-center gap-8 items-center p-[200px_150px_50px_150px] flex-col sm:flex-row sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')" }}
            >
                <div className="flex flex-col justify-center sm:items-center gap-4">
                    <h1 className="text-white text-xl md:text-6xl font-bold">HOT & SPICY</h1>
                    <h1 className="text-white  text-xl md:text-6xl font-bold">FRIED CHIKN</h1>
                    <p className="text-white  text-sm md:text-xl font-normal">Choose Your Favorite Ingredients</p>


                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="relative select-none" >
                    <Image
                        src="/images/Food/build-burger-slide-final.png"
                        width={550}
                        height={550}
                        alt="name"
                        className="object-contain select-none"
                    />
                    <span className="absolute inset-0 z-10 select-none"
                    ></span>
                </div>
            </div>


            <div
                className={`bg-cover min-h-screen w-full flex justify-center  gap-8 items-center p-[200px_150px_50px_150px] flex-col sm:flex-row   sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681')" }}
            >
                <div className="flex flex-col justify-center sm:items-center gap-4">
                    <h1 className="text-white text-xl md:text-6xl font-bold">HOT & SPICY</h1>
                    <h1 className="text-white  text-xl md:text-6xl font-bold">FRIED CHIKN</h1>
                    <p className="text-white  text-sm md:text-xl font-normal">Choose Your Favorite Ingredients</p>


                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="relative select-none">
                    <Image
                        src="/images/Food/build-burger-slide-final.png"
                        width={550}
                        height={550}
                        alt="name"
                        className="object-contain select-none"
                    />  <span className="absolute inset-0 z-10 select-none"
                    ></span>
                </div>
            </div>


            <div
                className={`bg-cover min-h-screen w-full flex justify-center gap-8 items-center p-[200px_150px_50px_150px] flex-col sm:flex-row   sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')" }}
            >
                <div className="flex flex-col justify-center sm:items-center gap-4">
                    <h1 className="text-white text-xl md:text-6xl font-bold">HOT & SPICY</h1>
                    <h1 className="text-white  text-xl md:text-6xl font-bold">FRIED CHIKN</h1>
                    <p className="text-white  text-sm md:text-xl font-normal">Choose Your Favorite Ingredients</p>
                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="relative select-none">
                    <Image
                        src="/images/Food/fried-chicken-slide-final.png"
                        width={550}
                        height={550}
                        alt="name"
                        className="object-contain select-none"
                    /> <span className="absolute inset-0 z-10 select-none"
                    ></span>
                </div>
            </div>
        </CustomCarousel>
    )
}

export default HomeBannerSlider