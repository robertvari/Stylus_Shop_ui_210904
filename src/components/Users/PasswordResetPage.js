import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {UserContext} from "../Contexts/UserContext";

function PasswordResetPage(props) {
    const {send_password_reset_email} = useContext(UserContext)
    const [email, set_email] = useState("")
    const history = useHistory();

    const submit_action = async (e) => {
        e.preventDefault()

        if(email.length === 0) return

        send_password_reset_email(email)

        history.push("/users/password-reset-email-sent")
    }

    return (
        <div className="content-container">
            <div className="content-offset"/>
            <form>
                <h3>RESET YOUR PASSWORD</h3>
                <small>We will send you an email to reset your password.</small>
                <br/>
                <input type="email" placeholder="Email" value={email} onChange={e => set_email(e.target.value)}/>

                <button className="inverted" onClick={submit_action}>SUBMIT</button>

                <br/>
                <small>or <Link to="/users/login">Cancel</Link></small>
            </form>

        </div>
    );
}

export default PasswordResetPage;