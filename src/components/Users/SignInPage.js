import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {UserContext} from "../Contexts/UserContext";

function SignInPage(props) {
    const {log_in_user} = useContext(UserContext)
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const history = useHistory()

    const log_in_action = async (e) => {
        e.preventDefault()

        if(email.length === 0 || password.length === 0) return

        await log_in_user(email, password)
        history.push("/users/profile")
    }

    return (
        <div className="content-container">
            <div className="content-offset"/>

            <form>
                <h3>LOGIN</h3>

                <input type="email" placeholder="Email" value={email} onChange={e => set_email(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => set_password(e.target.value)}/>

                <small><Link to="/users/password-reset">Forgot your password?</Link></small>
                <br/>

                <button className="inverted" onClick={log_in_action}>SIGN IN</button>

                <br/>
                <small>or <Link to="/">Return to Store</Link></small>
            </form>

        </div>
    );
}

export default SignInPage;