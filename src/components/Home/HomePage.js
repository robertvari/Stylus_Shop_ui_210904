import React, {useEffect, useState} from 'react';
import Slider from "./Slider";
import ShopFor from "./ShopFor";
import Home_ItemList from "./Home_ItemList";

function HomePage(props) {
    const [featured_list, set_featured_list] = useState([])
    const [analog_cameras, set_analog_cameras] = useState([])
    const [leica_M, set_leica_M] = useState([])

    const fetch_featured_list = () => {
        set_featured_list([1, 2])
    }

    const fetch_analog_cameras = () => {
      set_analog_cameras([1, 2, 3, 4, 5])
    }

    const fetch_leica_M = () => {
        set_leica_M([1, 2, 3])
    }

    useEffect(() => {
        fetch_analog_cameras()
        fetch_leica_M()
        fetch_featured_list()
    }, [])

    return (
        <div className="content-container">
            <Slider/>

            <ShopFor/>

            <Home_ItemList title="FEATURED COLLECTION" items={featured_list}/>

            <Home_ItemList title="ANALOG CAMERAS" items={analog_cameras}/>

            <Home_ItemList title="LEICA M" items={leica_M}/>
        </div>
    );
}

export default HomePage;