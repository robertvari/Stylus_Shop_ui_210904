import React, {useContext, useEffect, useState} from 'react';
import {ItemListContext} from "../Contexts/ItemListContext";

function Slider(props) {
    const {items} = useContext(ItemListContext)
    const [featured_list, set_featured_list] = useState([])
    const [current_index, set_current_index] = useState(1)

    const fetch_featured_list = () => {
        set_featured_list(items.filter(item => item.featured))
    }

    useEffect(()=>{
        fetch_featured_list()
    }, [items])

    return (
        <div className="slider-container">
            <div className="image-container">
                {
                    featured_list.map((featured_item, index) => <img key={featured_item.id} className={`slider-image ${current_index === index? "active":""}`} src={featured_item.image} alt=""/>)
                }
            </div>
        </div>
    );
}

export default Slider;