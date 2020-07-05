import React, { Component } from "react";
import './slide.scss';
import Slideshow from "./Slideshow";
import ImgComp from './ImgComp';
import slider1 from './picture/slider1.jpg';
import slider2 from './picture/slider2.jpeg';
import slide3 from './picture/slide3.jpg';
import slide9 from './picture/slide9.png';
import slide5 from './picture/slide5.jpg';
import slide6 from './picture/slide6.jpg';
import slide7 from './picture/slide7.jpeg';
import slide8 from './picture/slide8.png';


const slides = [
    <ImgComp src={slider1} />,
    <ImgComp src={slider2} />,
    <ImgComp src={slide3} />,
    <ImgComp src={slide9} />,
    <ImgComp src={slide5} />,
    <ImgComp src={slide6} />,
    <ImgComp src={slide7} />,
    <ImgComp src={slide8} />,
  ];
  class Automatic extends Component {
    render() {
        return (       
                  
                    <Slideshow slides={slides} />
                    
               );
    }
}

export default Automatic;

