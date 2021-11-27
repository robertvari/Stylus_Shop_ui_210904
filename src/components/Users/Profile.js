import React, {useContext} from 'react';
import {UserContext} from "../Contexts/UserContext";

function Profile(props) {
    const {
        first_name,
        set_first_name,
        last_name,
        set_last_name,
        company,
        set_company,
        address,
        set_address,
        city,
        set_city,
        post_code,
        set_post_code,
        phone,
        set_phone
    } = useContext(UserContext)

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <form className="profile-form">
                <h2>Profile</h2>
                <hr/>

                <div className="name-container">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </div>

                <input type="text" placeholder="Company"/>
                <input type="text" placeholder="Address"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Post code"/>
                <input type="text" placeholder="Phone"/>

                <hr/>

                <button className="inverted">UPDATE</button>
            </form>
        </div>
    );
}

export default Profile;