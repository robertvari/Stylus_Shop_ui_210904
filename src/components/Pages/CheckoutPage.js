import React, {useState} from 'react';
import {Link} from "react-router-dom";

function CheckoutPage(props) {
    const [logged_in, set_logged_in] = useState(false)

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <div className="checkout-container">
                <div className="costumer-details-container">
                    <h3>Contact information</h3>
                    {
                        !logged_in&& <small>Already have an account? <Link to={"/users/login"}>Log in</Link></small>
                    }
                </div>

                <div className="shopping-cart-container">
                    Shopping cart...
                </div>

            </div>
        </div>
    );
}

export default CheckoutPage;