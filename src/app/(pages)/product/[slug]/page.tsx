import LayoutClient from "../../layout-client";
import ImageProduct from "./components/ImageProduct";
import InformationProduct from "./components/InformationProduct";
import ListCombos from "./components/ListCombos";
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
                <div className="relative mx-auto max-w-screen-xl flex-col flex">
                    <Path />
                    <div className="flex ">
                        <ImageProduct urlImage="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18.jpg" name="name" />
                        <div className="flex flex-col gap-8">
                            <InformationProduct />
                            <ProductOptions />
                            <PricesCalculate />
                            <ListCombos />

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