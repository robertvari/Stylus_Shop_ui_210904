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
        set_phone,
        update_profile
    } = useContext(UserContext)

    const update_clicked = (e) => {
        e.preventDefault()
        update_profile()
    }

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <form className="profile-form">
                <h2>Profile</h2>
                <hr/>

                <div className="name-container">
                    <input type="text" placeholder="First name" value={first_name} onChange={e => set_first_name(e.target.value)}/>
                    <input type="text" placeholder="Last name" value={last_name} onChange={e => set_last_name(e.target.value)}/>
                </div>

                <input type="text" placeholder="Company" value={company} onChange={e => set_company(e.target.value)}/>
                <input type="text" placeholder="Address" value={address} onChange={e => set_address(e.target.value)}/>
                <input type="text" placeholder="City" value={city} onChange={e => set_city(e.target.value)}/>
                <input type="text" placeholder="Post code" value={post_code} onChange={e => set_post_code(e.target.value)}/>
                <input type="text" placeholder="Phone" value={phone} onChange={e => set_phone(e.target.value)}/>

                <hr/>

                <button className="inverted" onClick={update_clicked}>UPDATE</button>
            </form>
        </div>
    );
}

export default Profile;