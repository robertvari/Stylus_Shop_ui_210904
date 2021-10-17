import React from 'react';

function Header(props) {
    return (
        <div className="header-container">

            <div className="content-container">
                <div className="title-container">
                    <h1>Stylus Shop</h1>

                    <div>
                        <small><a href="">Sign in</a> or <a href="">Create an Account</a></small>
                        <br/>
                        <input type="search"/>

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