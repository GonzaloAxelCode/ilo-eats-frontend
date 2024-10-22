
export default function ButtonPrimary({ label, hidden, submit, children, ...props }: any) {
    return (
        <button
            type={submit ? "submit" : "button"}
            className={`cursor-pointer ${hidden ? 'hidden' : 'flex'} items-center justify-center bg-gray-800 text-white rounded-full text-xs uppercase font-bold px-5 py-4 shadow-lg transition-all duration-200 opacity-90 hover:opacity-100`}
            {...props}
        >
            {label ? label : children}
        </button>
    );
}