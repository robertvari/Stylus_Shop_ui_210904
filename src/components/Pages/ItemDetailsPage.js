import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ItemListContext} from "../Contexts/ItemListContext";

function ItemPage({data}){
    return <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
}


function ItemDetailsPage(props) {
    const {slug} = useParams()
    const {items} = useContext(ItemListContext)
    const [item_data, set_item_data] = useState(null)

    const get_item_data = () => {
        if(slug){
            const result = items.find(data => data.slug === slug)
            if(result){
                set_item_data(result)
            }
        }else{
            set_item_data(null)
        }
    }

    useEffect(() => {
        get_item_data()
    }, [])

    return (
        <div className="content-container">
            <div className="content-offset"/>
            {
                item_data? <ItemPage data={item_data}/>: <div>Can't find this item in the database</div>
            }
        </div>
    );
}

export default ItemDetailsPage;