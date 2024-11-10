import Path from "@/app/(pages)/product/[slug]/components/Path"

const ContentTitleHolder = ({ title }: any) => {
    return (
        <div className="bg-gray-100  flex items-end justify-center pt-52">
            <div className="p-16">
                <Path />
                <h1 className="text-black text-center font-bold mt-2 text-4xl md:text-5xl">{title}</h1>
            </div>
        </div>
    )
}

export default ContentTitleHolder