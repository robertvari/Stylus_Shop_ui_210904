import React from 'react';

function ItemCard({data}) {
    return (
        <div>
            <img src={data.image} alt=""/>
            <small>{data.summary}</small>
            <small>{data.price}</small>
        </div>
    );
}

export default ItemCard;