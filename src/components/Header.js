import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header-container">

            <div className="content-container">
                <div className="title-container">
                    <Link to="/"><h1>Stylus Shop</h1></Link>

                    <div>
                        <small className="sign-in-container"><Link to="/users/login">Sign in</Link> or <Link to="/users/registration">Create an Account</Link></small>
                        <br/>

                        <div className="search-box">
                            <input type="text" placeholder="Search all products..."/>
                            <i className="fas fa-search"/>
                        </div>


                        <button><i className="fas fa-shopping-cart"/> CART</button>
                    </div>

                </div>
                

                <div className="menu">
                    <div className="menu-item">CAMERAS</div>
                    <div className="menu-item">CASES</div>
                    <div className="menu-item">VIDEO</div>
                    <div className="menu-item">ACCESSORIES</div>
                    <div className="menu-item">SPORT OPTICS</div>
                    <div className="menu-item">LIFESTYLE</div>
                </div>
            </div>

        </div>
    );
}

export default Header;