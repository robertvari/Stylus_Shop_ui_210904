import React, {useContext, Fragment} from 'react';
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import CartItem from "./CartItem";
import {numberWithCommas} from "../../utilities";
import {Link} from "react-router-dom";


function ShoppingCartPopup(props) {
    const {shopping_list, total, count, visible, set_visible} = useContext(ShoppingCartContext)

    if(!visible) return null

    return (
        <div className="cart-container" onClick={e => set_visible(false)}>

            <div className="cart-details" onClick={e => e.stopPropagation()}>
                {
                    count > 0?
                        <Fragment>
                            <h3>SHOPPING CART</h3>
                            <hr/>

                            {
                                shopping_list.map(data => <CartItem key={data.id} data={data}/>)
                            }
                            <hr/>

                            <h2 className="price">${numberWithCommas(total)}</h2>

                            <small className="taxes">Shipping, taxes, and discounts will be calculated at checkout.</small>

                            <Link to={"/checkout"} className={"checkout-button"}>
                                <button className="inverted" onClick={e => set_visible(false)}>CHECK OUT</button>
                            </Link>

                        </Fragment>
                        :
                        <Fragment>
                            <h3>YOUR CART IS CURRENTLY EMPTY.</h3>
                            <p>Continue browsing <Link to={"/"}>here.</Link>.</p>
                        </Fragment>
                }
            </div>
        </div>
    );
}

export default ShoppingCartPopup;