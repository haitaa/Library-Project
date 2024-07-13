import React from "react";

import "./TitleTypeOne.css";
import Victor from "../../assets/victor.png";

export default function TitleTypeOne({ className, Title, TitleTop }) {
    return (
        <div className={`titleTypeOne ${className}`}>
            <small>{TitleTop}</small>
            <div className="heading-H">
                <div className="line"></div>
                <h2>{Title}</h2>
                <div className="line"></div>
            </div>
            <img src={Victor} className="victor" />
        </div>
    );
}
