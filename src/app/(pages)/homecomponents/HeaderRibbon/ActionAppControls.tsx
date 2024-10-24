import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const ActionAppControls = () => {
    return (
        <div
            className="bg-white rounded-full flex flex-col items-center w-[48px] h-[174px] justify-center p-[11px] absolute right-[1rem] top-[70vh] md:top-[6rem]
            md:flex-row md:h-[48px] md:w-[184px] md:p-[6px_11px_6px_5px]  shadow-[0_0_30px_rgba(0,0,0,0.12)]"
        >
            <Item type="account" onClick={() => null} Icon={FiUser} />
            <Item
                type="favorite"
                onClick={() => null}
                Icon={FiHeart}
                number={2}
            />
            <Item
                type="cart"
                onClick={() => null}
                Icon={FiShoppingBag}
                number={1}
            />
            <Item
                type="search"
                onClick={() => null}
                Icon={FiSearch}
            />
        </div>
    );
};
export default ActionAppControls;

function Item({ onClick, Icon, number }: any) {
    return (
        <div
            className="relative cursor-pointer rounded-full bg-white w-9 h-9 flex justify-center items-center transition-all duration-200 hover:bg-[#fcb900]"
            onClick={onClick}
        >
            <Icon className="w-[21px] h-[22px]" />
            {number && (
                <span className="absolute text-white bg-[#333] top-1/2 mt-[-18px] left-6 text-[9px] leading-[14px] h-[14px] min-w-[14px] rounded-full text-center z-[1] whitespace-nowrap">
                    {number}
                </span>
            )}
        </div>
    );
}
