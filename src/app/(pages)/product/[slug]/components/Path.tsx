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

export default function Path({ links = data_paths }: any) {
    return (
        <div className="flex justify-center items-center text-center">
            {links.map((path: any, index: number) => (
                <span key={index} className="flex items-center">
                    {index === data_paths.length - 1 || path.disable ? (
                        <span className="text-gray-500 text-xs uppercase font-rubik">
                            {path.namePath}
                        </span>
                    ) : (
                        <Link href={path.link}>
                            <span className="text-black text-xs uppercase font-rubik cursor-pointer">
                                {path.namePath}
                            </span>
                        </Link>
                    )}
                    {index < data_paths.length - 1 && (
                        <span className="mx-1 text-gray-400">/</span>
                    )}
                </span>
            ))}
        </div>
    );
}
