import Link from "next/link";

const data_paths = [
    {
        namePath: "HOME",
        link: "/fastfood",
    },
    {
        namePath: "SANDWICHES",
        link: "/fastfood/product-category/sandwiches",
    },
    {
        namePath: "BEEF AVOCADO SANDWICH",
        link: "/fastfood/product-category/sandwiches/",
        disable: true,
    },
];

export default function Path({ links = data_paths, dark = true }: any) {
    return (
        <div className="flex  items-center text-center">
            {links.map((path: any, index: number) => (
                <span key={index} className="flex items-center">
                    {index === data_paths.length - 1 || path.disable ? (
                        <span className={`${dark ? "text-gray-500" : "text-gray-100"}  text-xs uppercase font-rubik`}>
                            {path.namePath}
                        </span>
                    ) : (
                        <Link href={path.link}>
                            <span className={` ${dark ? "text-black" : "text-white"} text-xs uppercase font-rubik cursor-pointer`}>
                                {path.namePath}
                            </span>
                        </Link>
                    )}
                    {index < data_paths.length - 1 && (
                        <span className={`${dark ? "text-gray-500" : "text-gray-100"} mx-1 text-gray-400`}>/</span>
                    )}
                </span>
            ))}
        </div>
    );
}
