import React, { Component } from "react";
import "./slide.scss";
import Slideshow from "./Slideshow";
import ImgComp from "./ImgComp";
import slider1 from "./picture/slide1.jpg";
import slider2 from "./picture/slide2.jpg";
import slide3 from "./picture/slide3.png";
import slide9 from "./picture/slide4.jpg";
import slide5 from "./picture/slide5.jpeg";
import slide6 from "./picture/slide6.jpg";
import slide7 from "./picture/slide7.jpg";
import slide8 from "./picture/slide8.jpg";

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
    return <Slideshow slides={slides} />;
  }
}

export default Automatic;
