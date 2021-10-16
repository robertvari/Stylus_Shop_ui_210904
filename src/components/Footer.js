import React from 'react';

function Footer({title, address, phone, email}) {
    return (
        <div>
            <div>{title}</div>
            <div>{address}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
    );
}

export default Footer;