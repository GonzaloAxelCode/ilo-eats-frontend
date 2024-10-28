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
const nutritionalInfoData = [
    {
        name: "Energy",
        amount: 570,
        unit: "Cal",
        DI: 29,
        percentDI: "29%"
    },
    {
        name: "Protein",
        amount: 32,
        unit: "g",
        DI: 64,
        percentDI: "64%"
    },
    {
        name: "Fat",
        amount: 13,
        unit: "g",
        DI: 17,
        percentDI: "17%"
    },
    {
        name: "Sat Fat",
        amount: 2.0,
        unit: "g",
        DI: 10,
        percentDI: "10%"
    },
    {
        name: "Carbs",
        amount: 19,
        unit: "g",
        DI: 7,
        percentDI: "7%"
    }
];

const ProductSlug = () => {
    return (
        <main>
            <LayoutClient>
                <div className="relative mx-auto max-w-screen-xl flex-col flex">
                    <Path />
                    <div className="flex ">
                        <ImageProduct urlImage="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18.jpg" name="name" />
                        <div className="flex flex-col gap-8">
                            <InformationProduct
                                title="Big Brekkie BBQ Burger"
                                description="Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch."
                                serving_size="320g"
                                nutritional_data={nutritionalInfoData}
                            />
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