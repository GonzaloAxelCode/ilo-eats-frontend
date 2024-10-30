
import { useContext } from "react";
import { UIContext } from "../context/UIContext";
export const useUICart = () => {
    const { isCartOpen, setCartOpen, openCart }: any = useContext(UIContext) ?? {};

    return { isCartOpen, setCartOpen, openCart };
};