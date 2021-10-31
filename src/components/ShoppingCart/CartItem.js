import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";


function Quantity({quantity, item_id}){
    const {set_quantity} = useContext(ShoppingCartContext)

    return <div className="quantity-container">
        <i className="far fa-minus-square" onClick={() => set_quantity(item_id, -1)}/>
        <div>{quantity}</div>
        <i className="far fa-plus-square" onClick={() => set_quantity(item_id, 1)}/>
    </div>
}


function CartItem({data}) {
    const {remove_from_cart} = useContext(ShoppingCartContext)

    return (
        <div className="cart-item-container">
            <img src={data.image} alt=""/>
            <div>{data.title}</div>
            <Quantity quantity={data.quantity} item_id={data.id}/>
            <h3>${data.price}</h3>

            <i className="fas fa-trash-alt" onClick={e => remove_from_cart(data.id)}/>
        </div>
    );
}

export default CartItem;