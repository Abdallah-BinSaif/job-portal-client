import React from 'react';
import {PiSquaresFourThin} from "react-icons/pi";

const BannerSearch = () => {
    return (
        <div className={"bg-gray-300 rounded-lg flex items-center p-4 lg:w-full"}>
            <select className={"bg-gray-300 mr-4"}>
                <option>Industry</option>
                <option>programming</option>
            </select>
            <select className={"bg-gray-300 mr-4"}>
                <option>Location</option>
                <option>Dhaka</option>
                <option>Comilla</option>
            </select>
            <div className={"divider divider-horizontal"}></div>
            <PiSquaresFourThin/>
            <input className={"h-12 bg-gray-300"} type={"text"} placeholder={"your key words"}/>
            <button className={"btn btn-primary"}>Search</button>
        </div>
    );
};

export default BannerSearch;