import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Office.css";

const MyCollection = [
  {
    imgPath: './images/photo1.jpg',
  },
  {
    imgPath: './images/photo2.jpg',
  },
];

const Office = () => {
    return (
        <div className="office">
            <Carousel showArrows={true} showThumbs={true}>
                {MyCollection.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.imgPath} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Office;
