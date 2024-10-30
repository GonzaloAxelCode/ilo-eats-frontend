import { useContext } from "react";
import { UIContext } from "../context/UIContext";

export const useUIProductOrder = () => {
    const { isProductOrderOpen, setProductOrderOpen, openProductOrder }: any = useContext(UIContext) ?? {};

    return { isProductOrderOpen, setProductOrderOpen, openProductOrder };
};