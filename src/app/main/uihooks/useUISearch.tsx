import { useContext } from "react";
import { UIContext } from "../context/UIContext";

export const useUISearch = () => {
    const { isSearchOpen, setSearchOpen, openSearch }: any = useContext(UIContext) ?? {};

    return { isSearchOpen, setSearchOpen, openSearch };
};