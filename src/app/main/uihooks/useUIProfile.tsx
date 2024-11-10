
import { useContext } from "react";
import { UIContext } from "../context/UIContext";

export const useUIProfile = () => {
    const {
        isProfilePanelOpen,
        openProfilePanel,
        setProfilePanelOpen }: any = useContext(UIContext) ?? {};

    return {
        isProfilePanelOpen,
        openProfilePanel,
        setProfilePanelOpen
    };
};