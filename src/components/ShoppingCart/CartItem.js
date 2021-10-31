import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";

function CartItem({data}) {
    const {remove_from_cart} = useContext(ShoppingCartContext)

    return (
        <div className="cart-item-container">
            <img src={data.image} alt=""/>
            <div>{data.title}</div>
            <div>quantity...</div>
            <h3>${data.price}</h3>

            <i className="fas fa-trash-alt" onClick={e => remove_from_cart(data.id)}/>
        </div>
    );
}

export default CartItem;