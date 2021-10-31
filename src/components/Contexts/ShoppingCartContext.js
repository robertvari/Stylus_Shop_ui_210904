import React, {createContext, useEffect, useState} from "react";

export const ShoppingCartContext = createContext(true)

export const ShoppingCartProvider = (props) => {
    const [shopping_list, set_shopping_list] = useState([])
    const [total, set_total] = useState(0)
    const [count, set_count] = useState(0)

    const set_new_shopping_list = (new_shopping_list) => {
        set_shopping_list(new_shopping_list)
        localStorage.setItem("shopping_list", JSON.stringify(new_shopping_list))
    }

    const is_in_cart = (item_id) => {
        const result = shopping_list.find(data => data.id === item_id)
        return !!result
    }

    const calc_count = () => {
        let _count = 0
        for(let i=0;i<shopping_list.length;i++){
            let _item = shopping_list[i]
            _count += _item.quantity
        }

        set_count(_count)
    }

    const calc_total = () => {
        let _total = 0
        for(let i=0;i<shopping_list.length;i++){
            const _item = shopping_list[i]
            const _price = _item.price

            _total += _price * _item.quantity
        }

        set_total(_total)
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

        set_new_shopping_list(_shopping_list)
    }

    useEffect(() => {
        calc_count()
        calc_total()
    }, [shopping_list])

    useEffect(() => {
        const old_shopping_list = localStorage.getItem("shopping_list")
        if(old_shopping_list){
            set_shopping_list(JSON.parse(old_shopping_list))
        }
    }, [])

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