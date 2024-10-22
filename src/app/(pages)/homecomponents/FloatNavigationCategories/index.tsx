"use client"

import BurguerIcon from "@/app/main/ui/icons/BurguerIcon"
import ItemNavCategory from "./ItemNavCategory"

const FloatNavigationCategories = () => {
    const offset = 0
    return (
        <div className="z-10 absolute left-1/2 top-[12rem]  w-screen  -translate-x-1/2 mx-auto max-w-screen-lg">
            <div
                className={`relative bg-[#fcb900] flex justify-center rounded-[8px] transition-all duration-200  py-2
        ${offset === 0 ? " overflow-visible" : "max-h-0 overflow-hidden"}`}
            >
                {/* Rotated shadows */}
                <div className="absolute content-[''] bottom-[20px] left-[20px] w-[50%] top-[40px] shadow-[0_15px_13px_rgba(51,51,51,1)] rotate-[-2deg] z-[-1]" />
                <div className="absolute content-[''] bottom-[20px] right-[20px] w-[50%] top-[40px] shadow-[0_15px_13px_rgba(51,51,51,1)] rotate-[2deg] z-[-1]" />


                <ItemNavCategory
                    label="PIZZA"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/pizzas"
                    left="-10vw"
                >
                    Pizzas
                </ItemNavCategory>
                <ItemNavCategory
                    label="BURGUERS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/burgers"
                    left="-15vw"
                >
                    Burgers
                </ItemNavCategory>
                <ItemNavCategory
                    label="SANDWICHES"
                    typeEffect="opacity-effect"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/sandwiches"
                    left="0em"
                >
                    Sandwiches
                </ItemNavCategory>
                <ItemNavCategory
                    label="SIDES & SALADS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/sides-salads"
                />
                <ItemNavCategory
                    label="COMBOS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/combos"
                    left="-23vw"
                >
                    CombosContent
                </ItemNavCategory>
                <ItemNavCategory
                    label="DRINKS"
                    Icon={() => <BurguerIcon className="w-[30px] h-[30px]" />}
                    path="/fastfood/product-category/drinks"
                    left="-17vw"
                >
                    Drinks
                </ItemNavCategory>

            </div>
        </div>
    )
}

export default FloatNavigationCategories