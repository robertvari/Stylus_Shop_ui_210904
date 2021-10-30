import React from 'react';

function ItemCard({data}) {
    return (
        <div>
            <img src={data.image} alt=""/>
            <small>{data.title}</small>
            <small>{data.price}</small>
        </div>
    );
}

export default ItemCard;