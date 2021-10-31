import React, {createContext, useState} from "react";

export const ShoppingCartContext = createContext(true)

export const ShoppingCartProvider = (props) => {
    const [shopping_list, set_shopping_list] = useState([])
    const [total, set_total] = useState(0)
    const [count, set_count] = useState(0)

    const add_to_cart = (item_data) => {
        console.log(`Item: ${item_data.title} was added to shopping cart.`)
        set_count(count + 1)
    }


    return (
        <ShoppingCartProvider.Provider value={{
            shopping_list: shopping_list,
            total: total,
            count: count,

            add_to_cart: add_to_cart
        }}>
            {props.children}
        </ShoppingCartProvider.Provider>
    )
}