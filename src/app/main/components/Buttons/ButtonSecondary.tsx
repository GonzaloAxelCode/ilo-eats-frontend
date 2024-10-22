
export default function ButtonSecondary({ label, children, ...props }: any) {
    return (
        <button
            className="font-medium text-gray-800 px-5 py-2 border-2 border-gray-300 text-center bg-white rounded-full text-xs uppercase h-8 transition-all duration-200 cursor-pointer hover:text-red-600 hover:border-gray-800"
            {...props}
        >
            {label ? label : children}
        </button>
    );
}
