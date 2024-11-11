"use client"

import Button from "@/app/main/components/Buttons"
import Image from "next/image"

const OnlineOrderPromo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-10 py-8">
            <div>
                <h2 className="flex flex-col text-left text-4xl font-bold">
                    <span>4 Convenient
                    </span>
                    <span>Pick Up Spots
                    </span>
                </h2>
                <p className="text-left  text-[#888888] my-3 text-md">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                </p>
                <div>
                    <Button className="bg-[#FFCA3C]" label="FIND NEAREST LAFKA" />
                </div>
            </div>
            <div>
                <Image
                    className="object-fit"
                    src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/delivery-pic-home.png"
                    width={420}
                    height={420}
                    alt="image"
                />
            </div>
            <div className="flex flex-col items-end">
                <h2 className="flex flex-col text-right text-4xl font-bold">
                    <span>4 Convenient
                    </span>
                    <span>Pick Up Spots
                    </span>
                </h2>
                <p className="text-right text-[#888888] my-3 text-md">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                </p>

                <Button className="bg-[#FFCA3C]" label="FIND NEAREST LAFKA" />

            </div>
        </div>
    )
}

export default OnlineOrderPromo