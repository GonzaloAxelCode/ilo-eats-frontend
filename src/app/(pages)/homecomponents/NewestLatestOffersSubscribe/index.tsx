
"use client"
import Button from "@/app/main/components/Buttons"

const NewestLatestOffersSubscribe = () => {
    return (
        <div className="bg-[#ffca3c] relative w-screen">
            <div className="absolute left-1/2 -translate-x-[50%] -top-10">
                <div className="bg-[#ffca3c] rounded-full w-28 h-28 flex justify-center items-center">
                    <img
                        className="w-[80px] h-[80px] opacity-50"
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046874.png"
                        alt="image" />
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl pt-20 pb-14">
                <div className="flex flex-col items-center justify-center gap-7 px-8 md:px-0 md:max-w-xl mx-auto">
                    <p className="text-center text-3xl font-bold">Love Burgers? Like Deals?</p>
                    <p className="text-center text-md max-w-[80%]">Be the first to know about our newest menu items and latest offers.</p>
                    <div className="w-full rounded-full  bg-white ">
                        <div className="pl-4 pr-1 py-1 w-full flex">
                            <input type="text" className="outline-none w-full" placeholder="Tu correo electronico" />
                            <Button type="default" label="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewestLatestOffersSubscribe