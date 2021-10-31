import React from 'react';
import {Link} from "react-router-dom"

function ItemCard({data}) {
    return (
        <Link to={`/details/${data.slug}`} className="item-card">
            <img src={data.image} alt=""/>
            <div className="title">{data.title}</div>
            <div className="price">{data.price}</div>
        </Link>
    );
}

export default ItemCard;