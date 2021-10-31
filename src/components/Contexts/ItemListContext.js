import React, {createContext} from "react";

export const ItemListContext = createContext(true)

export const ItemListProvider = (props) => {
    return (
        <ItemListContext.Provider value={{

        }}>
            {props.children}
        </ItemListContext.Provider>
    )
}