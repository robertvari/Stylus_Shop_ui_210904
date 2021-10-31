import React from 'react';
import {useParams} from "react-router-dom";

function ItemDetailsPage(props) {
    const {slug} = useParams()

    return (
        <div className="content-container">
            <div className="content-offset"/>
            Item details: {slug}
        </div>
    );
}

export default ItemDetailsPage;