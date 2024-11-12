
import { useUICart } from "@/app/main/uihooks/useUICart";
import { useUIProfile } from "@/app/main/uihooks/useUIProfile";
import { useUISearch } from "@/app/main/uihooks/useUISearch";
import Link from "next/link";
import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const ActionAppControls = () => {
    const { openCart } = useUICart();
    const { openSearch } = useUISearch();
    const { openProfilePanel, setProfilePanelOpen, isProfilePanelOpen

    } = useUIProfile()
    return (
        <div
            className="bg-white rounded-full flex flex-col items-center w-[48px] h-[174px] justify-center p-[11px] absolute right-[1rem] top-[70vh] md:top-[6rem]
            md:flex-row md:h-[48px] md:w-[184px] md:p-[6px_11px_6px_5px]  shadow-[0_0_30px_rgba(0,0,0,0.12)]"
        >


            {isProfilePanelOpen ? <Item
                onClick={() => setProfilePanelOpen(false)}
                Icon={TfiClose} />

                : <Item
                    onClick={() => openProfilePanel()}
                    Icon={FiUser} />

            }


            <Item
                path="/favorites"
                Icon={FiHeart}
                number={2}
            />
            <Item

                onClick={openCart}
                Icon={FiShoppingBag}
                number={1}
            />
            <Item

                onClick={openSearch}
                Icon={FiSearch}
            />
        </div>
    );
};
export default ActionAppControls;

function Item({ onClick, Icon, number, path = null }: any) {
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
            {path && <Link href={path} className="absolute inset-0 z-10"></Link>}
        </div>
    );
}
