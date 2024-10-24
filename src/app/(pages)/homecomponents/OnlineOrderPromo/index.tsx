"use client"

import Button from "@/app/main/components/Buttons"
import Image from "next/image"

const OnlineOrderPromo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-10">
            <div>
                <h1 className="flex flex-col text-left text-2xl">
                    <span>4 Convenient
                    </span>
                    <span>Pick Up Spots
                    </span>
                </h1>
                <p className="text-left text-sm">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                </p>
                <div>
                    <Button type="primary" label="FIND NEAREST LAFKA" />
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
                <h1 className="flex flex-col text-right text-2xl">
                    <span>4 Convenient
                    </span>
                    <span>Pick Up Spots
                    </span>
                </h1>
                <p className="text-right text-sm">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                </p>

                <Button type="default" label="FIND NEAREST LAFKA" />

            </div>
        </div>
    )
}

export default OnlineOrderPromo