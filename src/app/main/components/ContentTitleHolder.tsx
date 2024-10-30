import Path from "@/app/(pages)/product/[slug]/components/Path"

const ContentTitleHolder = ({ title }: any) => {
    return (
        <div className="bg-gray-100 h-[500px] flex items-end justify-center md:h-[375px]">
            <div className="p-16">
                <Path />
                <h1 className="text-black mt-2 text-6xl">{title}</h1>
            </div>
        </div>
    )
}

export default ContentTitleHolder