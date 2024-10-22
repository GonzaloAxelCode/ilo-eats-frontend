import { FiPhoneCall } from "react-icons/fi";

const OrderCallNumber = () => {
    return (
        <div
            className="  cursor-pointer font-rubik sm:bg-[#a1ba32] sm:rounded-full sm:w-[48px] sm:h-[48px] sm:p-[11px] sm:absolute sm:left-[0em] sm:top-[6em] sm:z-[9999] sm:flex sm:items-center sm:justify-center sm:shadow-[0_0_30px_rgba(0,0,0,0.12)] 
      md:w-[190px] md:h-[48px] md:p-[6px_11px_6px_5px] md:bg-white md:shadow-[0_0_30px_rgba(0,0,0,0.12)] md:flex-col md:font-rubik md:rounded-full"
            onClick={() => alert("call direction")}
        >
            <p className="hidden text-[13px] text-[#4b4b4b] m-0 md:block font-extrabold">Order Online or Call Now</p>
            <div className="flex items-center justify-center">
                <FiPhoneCall className="text-white md:text-[#4b4b4b]" />
                <span className="hidden md:block text-[16px] font-rubik-bold text-[#4b4b4b] ml-1">
                    +555 234 766
                </span>
            </div>
        </div>
    )
}

export default OrderCallNumber