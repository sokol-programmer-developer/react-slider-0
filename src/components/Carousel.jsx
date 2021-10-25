import React, { useState } from "react";
import "./Style.css";
import { content } from "./CarouselData";

const  Carousel = () => {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div
            className="carousel"
        >
            <div  className="carousel_container"  >

                <img className="carousel_pic"  src={content[currImg].pic} alt="pic"/>

                 <div className="carousel_content">
                    <div className="carousel_center">
                        <h1 className="carousel_title"> {content[currImg].title} </h1>
                        <p className="carousel_subtitle"> {content[currImg].subtitle} </p>
                    </div>

                     <button className="slider_button">
                         <h2 className="slider_button_h2"> {content[currImg].button_h2} </h2>
                     </button>
                 </div>
            </div>

            <div className="carousel_arrow">
                <div className="carousel_left">
                    <button
                        onClick={() => {
                        currImg < content.length - 1 && setCurrImg(currImg + 1);
                        }}

                        className="carousel_right_arrow"
                    >
                        <h2 className="carousel_arrow-h2">  &gt; </h2>
                    </button>
                </div>

                <div className="carousel_right">
                    <button
                        onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                        }}
                        className="carousel_left_arrow"
                        >
                        <h2 className="carousel_arrow-h2"> &lt;</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;