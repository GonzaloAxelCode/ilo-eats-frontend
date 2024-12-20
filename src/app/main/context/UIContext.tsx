// UIContext.tsx
"use client";
import React, { createContext, ReactNode, useState } from "react";

export interface UIContextProps {
    isCartOpen: boolean;
    setCartOpen: (isOpen: boolean) => void;
    openCart: () => void;

    isSearchOpen: boolean
    setSearchOpen: (isOpen: boolean) => void
    openSearch: () => void

    isProductOrderOpen: boolean,
    setProductOrderOpen: (isOpen: boolean) => void
    openProductOrder: () => void


    isProfilePanelOpen: boolean
    setProfilePanelOpen: (isOpen: boolean) => void
    openProfilePanel: () => void
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

interface UIProviderProps {
    children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
    const [isProductOrderOpen, setProductOrderOpen] = useState<boolean>(false);
    const [isProfilePanelOpen, setProfilePanelOpen] = useState<boolean>(false);
    const openProfilePanel = () => setProfilePanelOpen(true);
    const openCart = () => setCartOpen(true);
    const openSearch = () => setSearchOpen(true);
    const openProductOrder = () => setProductOrderOpen(true);
    return (
        <UIContext.Provider value={{
            isProductOrderOpen,
            openProductOrder,
            setProductOrderOpen,
            isCartOpen,
            setCartOpen,
            openCart,
            isSearchOpen,
            setSearchOpen,
            openSearch,
            isProfilePanelOpen,
            openProfilePanel,
            setProfilePanelOpen
        }}>
            {children}

        </UIContext.Provider>
    );
};

