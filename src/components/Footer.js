import React from 'react';
import "./Footer.css"

function Footer({title, address, phone, email}) {
    return (
        <div className="footer-container">
            <div>{title}</div>
            <div>{address}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
    );
}

export default Footer;