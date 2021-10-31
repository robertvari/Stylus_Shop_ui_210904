import React, {createContext, useState} from "react";

export const ShoppingCartContext = createContext(true)

export const ShoppingCartProvider = (props) => {
    const [shopping_list, set_shopping_list] = useState([])
    const [total, set_total] = useState(0)
    const [count, set_count] = useState(0)

    const is_in_cart = (item_id) => {
        const result = shopping_list.find(data => data.id === item_id)
        return !!result
    }

    const add_to_cart = (item_data) => {
        const _item_data = item_data
        const _shopping_list = [...shopping_list]

        if(is_in_cart(item_data.id)){
            for(let i = 0; i<_shopping_list.length;i++){
                let _item = _shopping_list[i]
                if(_item.id === item_data.id){
                    _item.quantity ++
                    break
                }
            }
        }else{
            _item_data.quantity = 1
            _shopping_list.push(_item_data)
        }

        console.log(_item_data)
    }

    return (
        <ShoppingCartContext.Provider value={{
            shopping_list: shopping_list,
            total: total,
            count: count,

            add_to_cart: add_to_cart
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}