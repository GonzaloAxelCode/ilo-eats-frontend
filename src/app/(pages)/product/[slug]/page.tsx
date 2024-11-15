import LayoutClient from "../../layout-client";
import ImageProduct from "./components/ImageProduct";
import InformationProduct from "./components/InformationProduct";
import OtherProducts from "./components/OtherProducts";
import Path from "./components/Path";
import PricesCalculate from "./components/PricesCalculate";
import ProductOptions from "./components/ProductOptions";
import ProductReviews from "./components/ProductReviews";
import YouMayAlsoLike from "./components/YouMayAlsoLike";


const ProductSlug = () => {
    return (
        <main>
            <LayoutClient>
                <div className="relative mx-auto max-w-screen-xl flex-col flex pt-72">
                    <Path />
                    <div className="flex ">
                        <div className="">
                            <ImageProduct urlImage="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18.jpg" name="name" />
                        </div>
                        <div className="flex flex-col">
                            <InformationProduct />
                            <ProductOptions />
                            <PricesCalculate />


                        </div>

                    </div>
                    <div className="flex flex-col">
                        <ProductReviews />
                        <YouMayAlsoLike />
                        <OtherProducts />
                    </div>

                </div>
            </LayoutClient>
        </main>

    )
}

export default ProductSlug