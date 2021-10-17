import React from 'react';
import {Link} from "react-router-dom";

function SignInPage(props) {
    return (
        <div className="content-container">
            <form>
                <h3>LOGIN</h3>

                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <small><Link to="/password-reset">Forgot your password?</Link></small>
                <br/>

                <button className="inverted">SIGN IN</button>

                <br/>
                <small>or <Link to="/">Return to Store</Link></small>
            </form>

        </div>
    );
}

export default SignInPage;