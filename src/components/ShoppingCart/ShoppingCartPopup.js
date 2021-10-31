import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";

function ShoppingCartPopup(props) {
    const {shopping_list, total} = useContext(ShoppingCartContext)

    return (
        <div className="cart-container">
            <div className="cart-details">
                <h3>SHOPPING CART</h3>
                <hr/>
                {
                    shopping_list.map(data => <div key={data.id}>{data.title}</div>)
                }
                <hr/>

                <h2 className="price">${total}</h2>

                <small className="taxes">Shipping, taxes, and discounts will be calculated at checkout.</small>
                <button className="inverted">CHECK OUT</button>
            </div>
        </div>
    );
}

export default ShoppingCartPopup;