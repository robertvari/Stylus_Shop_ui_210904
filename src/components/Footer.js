import React from 'react';

function Footer(props) {
    return (
        <div className="footer-container">

            <div className="content-container">
                <div>
                    <h3>QUICK LINKS</h3>
                    <p>Search</p>
                    <p>Contact</p>
                    <p>About Us</p>
                    <p>News</p>
                    <p>FAQ</p>
                </div>

                <div>
                    <h3>GET IN TOUCH</h3>
                    <p>Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.</p>
                </div>

                <div>
                    <h3>NEWSLETTER</h3>

                    <div className="newsletter-box">
                        <input type="email" placeholder="Email"/>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;