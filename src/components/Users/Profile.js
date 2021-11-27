import React from 'react';

function Profile(props) {
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