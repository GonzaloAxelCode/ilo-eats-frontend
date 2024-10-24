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
export default CustomCarousel
