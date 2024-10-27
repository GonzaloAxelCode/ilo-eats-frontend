"use client"

import Image from "next/image";
import { useState } from "react";
import FormAddReview from "./FormAddReview";
export const tempReviews = [
    {
        user: {
            name: "Althemist",
            imgUser:
                "https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g",
        },
        rainting: 5,
        description:
            "The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Melbourne.",
        date: "Mar 20, 2022",
        product: {
            name: "Big Brekkie BBQ Burger",
        },
    },
    {
        user: {
            name: "Althemist",
            imgUser:
                "https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g",
        },
        rainting: 5,
        description:
            "The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Melbourne.",
        date: "Mar 20, 2022",
        product: {
            name: "Big Brekkie BBQ Burger",
        },
    },
];
const ProductReviews = () => {
    const [toggleSelect, setToggleSelect] = useState(2);

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center">
            <div className="relative flex pt-16">
                <span
                    className={`text-base font-medium px-4 py-3 cursor-pointer transition-all duration-300 ${toggleSelect === 2 ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
                        }`}
                    onClick={() => setToggleSelect(2)}
                >
                    Description
                </span>
                <span
                    className={`text-base font-medium px-4 py-3 cursor-pointer transition-all duration-300 ${toggleSelect === 1 ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
                        }`}
                    onClick={() => setToggleSelect(1)}
                >
                    Reviews (1)
                </span>
            </div>
            <div className="flex">
                {toggleSelect === 1 && (
                    <div className="grid grid-cols-2 gap-4 p-8 min-h-[327px] sm:grid-cols-1">
                        <div className="flex flex-col px-20 border-r-2 border-gray-300 sm:px-4">
                            <p className="text-2xl font-semibold sm:text-lg text-center">
                                {tempReviews.length === 0
                                    ? "Reviews"
                                    : ` ${tempReviews.length} review for Big Brekkie BBQ Burger`}
                            </p>
                            <div className="flex flex-col m-4">
                                {tempReviews.length === 0 && <p>There are no reviews yet.</p>}
                                {tempReviews.map((review: any, index: number) => (
                                    <div key={index} className="relative bg-white flex flex-col z-10 p-6 my-8 rounded-lg shadow-lg">
                                        <div className="absolute -top-8 left-8 bg-gray-100 flex justify-center items-center rounded-full w-16 h-16 z-20">
                                            <Image
                                                src={review.user.imgUser}
                                                width={50}
                                                height={50}
                                                alt={review.user.name}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <p className="text-gray-800 text-sm font-medium">{review.user.name}</p>
                                            <span className="mx-2 text-gray-500">|</span>
                                            <p className="text-gray-500 text-xs">{review.date}</p>
                                        </div>
                                        <p className="" >
                                            {review.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <FormAddReview />
                    </div>
                )}
                {toggleSelect === 2 && (
                    <div className="block w-3/4 max-w-4/5 mx-auto px-5 py-10">
                        <p className="text-center text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonum nibhie
                            euismod. Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                            tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                            placerat facer possim assum.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductReviews