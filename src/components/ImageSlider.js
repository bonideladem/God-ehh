import React,{useState} from 'react';
import {sliderData} from './SliderData';

const imageSlider= () => {
    return (
        <>
        {sliderData.map((slide, index) =>{
            return <img src={slide.image} alt='travel image' />;
        })}
        </>
    );
};

export default imageSlider;



