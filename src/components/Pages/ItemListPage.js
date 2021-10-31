import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ItemCard from "./ItemCard";
import axios from "axios"


function ItemListPage(props) {
    const {category} = useParams()
    const {subcategory} = useParams()
    const [items, set_items] = useState([])

    const fetch_item_list = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/items`
        }).then(res => set_items(res.data))
    }

    useEffect(() => {
        fetch_item_list()
    }, [])

    return (
        <div className="content-container">
            <div className="content-offset"/>
            <h3>{category}</h3>

            <div className="item-list-container">
                {
                    items.filter(item_data => subcategory? item_data.category === category && subcategory === item_data.subcategory : item_data.category === category)
                        .map(item_data => <ItemCard key={item_data.id} data={item_data}/>)
                }
            </div>
        </div>
    );
}

export default ItemListPage;