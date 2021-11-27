import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

function RegistrationPage(props) {
    const [email, set_email] = useState("")
    const [password1, set_password1] = useState("")
    const [password2, set_password2] = useState("")
    const [error, set_error] = useState(null)
    const [waiting, set_waiting] = useState(false)
    const history = useHistory();

    const handle_button_clicked = (e) => {
        e.preventDefault()
        set_error(null)

        if(email.length === 0){
            set_error("Email must be filled.")
            return
        }

        if(password1.length === 0){
            set_error("Password is invalid")
            return
        }

        if(password2 !== password1){
            set_error("Passwords doesn't match")
        }

        console.log("New user is registering", email)
    }

    return (
        <div className="content-container">
            <div className={"content-offset"}/>

            <form>
                <h3>CREATE ACCOUNT</h3>

                <input type="email" placeholder="Email" value={email} onChange={e => set_email(e.target.value)}/>
                <input type="password" placeholder="Password" value={password1} onChange={e => set_password1(e.target.value)}/>
                <input type="password" placeholder="Password confirm" value={password2} onChange={e => set_password2(e.target.value)}/>

                <br/>

                {
                    error&& <small className="error-message">{error}</small>
                }

                {
                    waiting?
                        <div>Waiting...</div>
                        :
                        <button className="inverted" onClick={handle_button_clicked}>CREATE</button>
                }

                <br/>
                <small>or <Link to="/">Return to Store</Link></small>
            </form>

        </div>
    );
}

export default RegistrationPage;