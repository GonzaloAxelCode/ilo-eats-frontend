// UIContext.tsx
"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface UIContextProps {
    isCartOpen: boolean;
    setCartOpen: (isOpen: boolean) => void;
    toggleCart: () => void;
    openCart: () => void;
    isSearchOpen: boolean
    toggleSearch: () => void;
    setSearchOpen: (isOpen: boolean) => void
    openSearch: () => void
}

const UIContext = createContext<UIContextProps | undefined>(undefined);

interface UIProviderProps {
    children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };
    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };
    const openCart = () => {
        setCartOpen(true)
    }
    const openSearch = () => {
        setSearchOpen(true)
    }
    return (
        <UIContext.Provider value={{ isCartOpen, setCartOpen, toggleCart, openCart, isSearchOpen, setSearchOpen, toggleSearch, openSearch }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUICart = (): UIContextProps => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUICart must be used within a UIProvider");
    }
    return context;
};

export const useUISearch = (): UIContextProps => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUISearch must be used within a UIProvider");
    }
    return context;
};
