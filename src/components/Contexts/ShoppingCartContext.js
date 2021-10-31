import React, {createContext} from "react";

export const ShoppingCartContext = createContext(true)

export const ShoppingCartProvider = (props) => {
    return (
        <ShoppingCartProvider.Provider value={{
        }}>
            {props.children}
        </ShoppingCartProvider.Provider>
    )
}