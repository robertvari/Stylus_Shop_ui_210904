import React from 'react';

function CartItem({data}) {
    return (
        <div className="cart-item-container">
            <img src={data.image} alt=""/>
            <div>{data.title}</div>
            <div>quantity...</div>
            <h3>${data.price}</h3>
            <i className="fas fa-trash-alt"/>
        </div>
    );
}

export default CartItem;