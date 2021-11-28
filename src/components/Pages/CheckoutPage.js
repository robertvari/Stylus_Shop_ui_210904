import React, {useContext, useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../Contexts/ShoppingCartContext";
import CartItem from "../ShoppingCart/CartItem";
import {numberWithCommas} from "../../utilities";
import {UserContext} from "../Contexts/UserContext";

function CheckoutPage(props) {
    const {shopping_list, total, count} = useContext(ShoppingCartContext)
    const {
        email,
        first_name,
        last_name,
        company,
        address,
        city,
        post_code,
        phone,
        logged_in
    } = useContext(UserContext)

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <div className="checkout-container">
                {
                    count >0?
                        <Fragment>
                            <div className="costumer-details-container">
                                <h3>Contact information</h3>
                                <hr/>
                                {
                                    !logged_in&& <small className="have-an-account">Already have an account? <Link to={"/users/login"}>Log in</Link></small>
                                }

                                {
                                    email?
                                        <input type="email" placeholder="Email" value={email}/>
                                        :
                                        <input type="email" placeholder="Email"/>
                                }


                                <h4>Shipping address</h4>
                                <hr/>

                                <div className="name-container">
                                    {
                                        first_name?
                                            <input type="text" placeholder="First Name" value={first_name}/>
                                            :
                                            <input type="text" placeholder="First Name"/>
                                    }

                                    {
                                        last_name?
                                            <input type="text" placeholder="Last Name" value={last_name}/>
                                            :
                                            <input type="text" placeholder="Last Name"/>
                                    }

                                </div>

                                {
                                    company?
                                        <input type="text" placeholder="Company" value={company}/>
                                        :
                                        <input type="text" placeholder="Company"/>
                                }

                                {
                                    address?
                                        <input type="text" placeholder="Address" value={address}/>
                                        :
                                        <input type="text" placeholder="Address"/>
                                }

                                {
                                    city?
                                        <input type="text" placeholder="City" value={city}/>
                                        :
                                        <input type="text" placeholder="City"/>
                                }

                                {
                                    post_code?
                                        <input type="text" placeholder="Post code" value={post_code}/>
                                        :
                                        <input type="text" placeholder="Post code"/>
                                }

                                {
                                    phone?
                                        <input type="text" placeholder="Phone" value={phone}/>
                                        :
                                        <input type="text" placeholder="Phone"/>
                                }
                            </div>

                            <div className="shopping-cart-container">
                                {
                                    shopping_list.map(data => <CartItem key={data.id} data={data}/>)
                                }

                                <hr/>
                                <div className="total-price-container">
                                    <h3>Total</h3>
                                    <h2>${numberWithCommas(total)}</h2>
                                </div>

                                <hr/>

                                <div className="card-data-container">
                                    Bank card details...
                                </div>

                                <hr/>

                                <button className="inverted">Place order</button>
                            </div>

                        </Fragment>
                        :
                        <div>
                            <h3>YOUR CART IS CURRENTLY EMPTY.</h3>
                            <p>Continue browsing <Link to={"/"}>here.</Link>.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default CheckoutPage;