import ContentTitleHolder from "@/app/main/components/ContentTitleHolder";
import NewestLatestOffersSubscribe from "../homecomponents/NewestLatestOffersSubscribe";
import LayoutClient from "../layout-client";

import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
const favorites = [
    {
        id: 1,
        imageUrl: "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger18-440x440.jpg",
        name: "Big Brekkie BBQ Burger",
        price: 9.99,
    }
]
const FavoritesPage = () => {
    return (
        <main>
            <LayoutClient>

                <ContentTitleHolder title="FAVORITES" />
                <div className="pb-20">
                    <h1 className="mx-auto text-center text-xl font-bold">My Favorites on Lafka                   </h1>

                    <div className="flex flex-col mx-auto max-w-xl justify-between">
                        {favorites.map((el: any, index: number) => {
                            return <div key={index} className="flex items-center gap-5">
                                <span className="cursor-pointer px-3">
                                    <FiTrash2 />
                                </span>
                                <span className="">

                                    <Link href="#" className="cursor-pointer hover:underline text-red-600 font-normal">

                                        <img className="w-[70px] h-[70px] object-contain" src={el.imageUrl} alt={el.name} />

                                    </Link>
                                </span>
                                <span className="flex-3 text-left">
                                    <Link href="#" className="cursor-pointer hover:underline text-red-600 font-normal">
                                        {el.name}
                                    </Link>

                                </span>
                                <span className="flex items-center justify-center">
                                    <span>$</span>
                                    {el.price}
                                    <sup>{el.price}</sup>
                                </span>
                                <span className=" cursor-pointer hover:underline text-red-600 font-normal">
                                    Add To Cart
                                </span>
                            </div>
                        })}
                    </div>

                </div>
                <NewestLatestOffersSubscribe />
            </LayoutClient>
        </main>
    )
}

export default FavoritesPage