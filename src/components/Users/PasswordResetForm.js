import React, {useContext, useState} from 'react';
import {UserContext} from "../Contexts/UserContext";
import {useHistory, useParams} from "react-router-dom";

function PasswordResetForm(props) {
    const {reset_password} = useContext(UserContext)
    const {uid} = useParams()
    const {token} = useParams()
    const [password1, set_password1] = useState("")
    const [password2, set_password2] = useState("")
    const history = useHistory()

    const button_action = async (e) => {
        e.preventDefault()
        if(password1.length === 0) return
        if(password1 !== password2) return

        reset_password(password1, uid, token)
        history.push("/users/login")
    }

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <form>
                <h3>Password Reset</h3>

                <input type="password" placeholder="New Password" value={password1} onChange={e => set_password1(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" value={password2} onChange={e => set_password2(e.target.value)}/>

                <button className="inverted" onClick={button_action}>RESET PASSWORD</button>
            </form>

        </div>
    );
}

export default PasswordResetForm;