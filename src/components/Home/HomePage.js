import React from 'react';
import Slider from "./Slider";
import ShopFor from "./ShopFor";
import FeaturedCollection from "./FeaturedCollection";
import AnalogCameras from "./AnalogCameras";
import LeicaM from "./LeicaM";

function HomePage(props) {
    return (
        <div className="content-container">
            <Slider/>

            <ShopFor/>

            <FeaturedCollection/>

            <AnalogCameras/>

            <LeicaM/>
        </div>
    );
}

export default HomePage;