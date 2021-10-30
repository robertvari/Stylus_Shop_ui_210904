import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"

function MenuItem({item_data}){

    return <div className="menu-item">
        {item_data.title.toUpperCase()}

        {
            item_data.items && <i className="fas fa-caret-down"/>
        }

        {
            item_data.items && <div className="popup-menu">
                {
                    item_data.items.map(i => <small key={i} className="menu-item">{i}</small>)
                }
            </div>
        }

    </div>
}

function Menu(){
    const [menu_list, set_menu_list] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/categories"
        }).then(res => set_menu_list(res.data))
    }, [])

    return (
        <div className="menu">
            {
              menu_list.map(item_data => <MenuItem key={item_data.id} item_data={item_data}/>)
            }
        </div>
    )
}


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
                

                <Menu/>
            </div>

        </div>
    );
}

export default Header;