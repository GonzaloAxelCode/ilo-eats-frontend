import Path from "@/app/(pages)/product/[slug]/components/Path"

const ParalaxContentTitleHolder = ({ title, description }: any) => {
    const imageUrl = "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/about-us-lafka-hero-title.jpg"
    return (

        <div
            style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundAttachment: "fixed",  // Para lograr el efecto parallax
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}




        >
            <div
                className={` pt-80 pb-40 px-10 w-full min-h-full  mx-auto max-w-screen-2xl`}>


                <div className="flex flex-col">
                    <Path dark={false} />
                    <h1 className="text-white font-bold text-6xl my-6">{title}</h1>
                    <p className="text-white font-bold text-xl max-w-lg leading-8 ">{description}</p>
                </div>
            </div>

        </div>

    )
}

export default ParalaxContentTitleHolder