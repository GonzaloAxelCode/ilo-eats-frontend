import { useRouter } from 'next/navigation';

const ButtonDF = ({ label, submit, to, ...props }: any) => {
    const router = useRouter();

    const redirect = () => {

        if (!submit) {
            router.push(to ? to : "/fastfood");
        }
    };
    return (
        <button
            type={submit ? "submit" : "button"}
            className="cursor-pointer bg-red-600 text-white rounded-full text-xs uppercase font-bold px-5 py-4 shadow-lg transition-all duration-200 hover:bg-gray-800"
            onClick={redirect}
            {...props}
        >
            {label ? label : props.children}
        </button>
    )
}

export default ButtonDF