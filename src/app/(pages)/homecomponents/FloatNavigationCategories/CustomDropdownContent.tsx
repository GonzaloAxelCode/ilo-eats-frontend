
const CustomDropdownContent = ({
    children,
    isOpen,
    left,
}: any) => {

    return (
        <div
            className={`absolute cursor-default bg-white shadow-[0_0_40px_rgba(0,0,0,0.2)] rounded-md z-10 transition-all ease-in-out duration-200 
      ${isOpen ? "max-h-[400px] mt-[3.75em] overflow-hidden" : "max-h-0 mt-[3.75em] overflow-hidden"} ${left}`}
        >
            {children}
        </div>
    );

}

export default CustomDropdownContent