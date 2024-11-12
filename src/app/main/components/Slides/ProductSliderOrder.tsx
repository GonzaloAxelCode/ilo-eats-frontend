import ImageProduct from "@/app/(pages)/product/[slug]/components/ImageProduct"
import InformationProduct from "@/app/(pages)/product/[slug]/components/InformationProduct"
import PricesCalculate from "@/app/(pages)/product/[slug]/components/PricesCalculate"
import ProductOptions from "@/app/(pages)/product/[slug]/components/ProductOptions"
import { useState } from "react"
import Button from "../Buttons"

const ProductSliderOrder = () => {

    const [quantity, setQuantity] = useState<number>(1)
    return (

        <div className=" mx-auto max-w-screen-xl flex-col flex pt-14">
            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col sticky top-20 self-start">
                    <ImageProduct urlImage="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18.jpg" name="name" />

                </div>


                <div className="">
                    <div className="flex flex-col gap-4">
                        <InformationProduct />

                        <PricesCalculate />
                        <ProductOptions />

                    </div>
                    <div className="sticky top-20 bottom-0   p-3 bg-white border" style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.25)" }}>
                        <div className="flex mx-auto">
                            <div className="flex gap-1 justify-around items-center">
                                <span className="p-3 cursor-pointer select-none font-bold" onClick={() => setQuantity((prev: number) => prev + 1)}>+</span>
                                <span className="p-0 cursor-pointer font-bold">{quantity}</span>
                                <span className="p-3 cursor-pointer select-none font-bold" onClick={() => setQuantity((prev: number) => Math.max(prev - 1, 0))}>-</span>
                            </div>
                            <Button type="secondary" label="ADD TO CART" />
                        </div>

                    </div>


                </div>

            </div>

        </div>



    )
}

export default ProductSliderOrder