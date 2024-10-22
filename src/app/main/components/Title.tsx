
export default function Title({ size, color, children, ...props }: any) {
    return (
        <div
            className={`font-bold ${color ? `text-[${color}]` : 'text-black'} ${size === "1rem"
                ? "text-base"
                : size === "2rem"
                    ? "text-2xl"
                    : size === "3rem"
                        ? "text-3xl"
                        : "text-lg"
                } md:${size === "1rem" ? "text-sm" : size === "2rem" ? "text-xl" : "text-2xl"} 
      lg:${size === "1rem" ? "text-xs" : size === "2rem" ? "text-lg" : "text-xl"}
      xl:${size === "1rem" ? "text-sm" : size === "2rem" ? "text-xl" : "text-3xl"}`}
            {...props}
        >
            {children}
        </div>
    );
}
