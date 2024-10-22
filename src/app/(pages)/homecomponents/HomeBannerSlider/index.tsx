"use client"
import Button from "@/app/main/components/Buttons";
import P from "@/app/main/components/P";
import Title from "@/app/main/components/Title";
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
            className="w-screen BannerSlideWrapper "
            itemsToScroll={1}
            itemsToShow={1}
            enableAutoPlay
            autoPlaySpeed={5000}
            isRTL

        >

            <div
                className={`bg-cover min-h-screen w-full flex justify-between items-center p-[200px_150px_50px_150px] sm:flex-col sm:justify-center sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')" }}
            >
                <div className="flex flex-col justify-center sm:items-center">
                    <Title size="58px" color="#fff">{`SAVIN' CRAVIN'`}</Title>
                    <Title size="68px" color="#fff">COMBO MEALS</Title>
                    <P size="19px" color="#fff">Get a Meal and SAVE up to 30% on Sides & Drinks</P>
                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="ImageBanner">
                    <Image
                        src="/images/Food/build-burger-slide-final.png"
                        width={150}
                        height={150}
                        alt="name"
                        className=""
                    />
                </div>
            </div>


            <div
                className={`bg-cover min-h-screen w-full flex justify-between items-center p-[200px_150px_50px_150px] sm:flex-col sm:justify-center sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681')" }}
            >
                <div className="flex flex-col justify-center sm:items-center">
                    <Title size="58px" color="#fff">{`YOUR BURG'R`}</Title>
                    <Title size="70px" color="#fff">{`YOUR TASTE`}</Title>
                    <P size="19px" color="#fff">Choose Your Favorite Ingredients</P>
                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="ImageBanner">
                    <Image
                        src="/images/Food/build-burger-slide-final.png"
                        width={150}
                        height={150}
                        alt="name"
                        className="object-contain"
                    />
                </div>
            </div>


            <div
                className={`bg-cover min-h-screen w-full flex justify-between items-center p-[200px_150px_50px_150px] sm:flex-col sm:justify-center sm:p-[230px_0px_50px_0px] lg:p-[200px_50px_50px_50px]`}
                style={{ backgroundImage: "url('https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617')" }}
            >
                <div className="flex flex-col justify-center sm:items-center">
                    <Title size="58px" color="#fff">HOT & SPICY</Title>
                    <Title size="70px" color="#fff">FRIED CHIKN</Title>
                    <P size="19px" color="#fff">Choose Your Favorite Ingredients</P>
                    <Button type="default" label="TRY COMBO PRODUCTS" />
                </div>
                <div className="ImageBanner">
                    <Image
                        src="/images/Food/fried-chicken-slide-final.png"
                        width={150}
                        height={150}
                        alt="name"
                        className="object-contain"
                    />
                </div>
            </div>
        </CustomCarousel>
    )
}

export default HomeBannerSlider