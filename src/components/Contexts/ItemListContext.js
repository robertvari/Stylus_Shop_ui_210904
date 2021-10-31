import React, {createContext} from "react";

export const ItemListContext = createContext(true)

export const ItemListProvider = (props) => {

    const print_hello = () => {
        console.log("hello from ItemListContext")
    }

    return (
        <ItemListContext.Provider value={{

            user_name : "Robert Vari",
            print_hello: print_hello

        }}>
            {props.children}
        </ItemListContext.Provider>
    )
}