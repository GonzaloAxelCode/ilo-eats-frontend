import ImageProduct from "@/app/(pages)/product/[slug]/components/ImageProduct"
import InformationProduct from "@/app/(pages)/product/[slug]/components/InformationProduct"
import PricesCalculate from "@/app/(pages)/product/[slug]/components/PricesCalculate"
import ProductOptions from "@/app/(pages)/product/[slug]/components/ProductOptions"

const ProductSliderOrder = () => {
    return (
        <div className="relative mx-auto max-w-screen-xl flex-col flex">
            <div className="flex ">
                <ImageProduct urlImage="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18.jpg" name="name" />
                <div className="flex flex-col gap-8">
                    <InformationProduct />
                    <ProductOptions />
                    <PricesCalculate />
                </div>
            </div>
        </div>
    )
}

export default ProductSliderOrder