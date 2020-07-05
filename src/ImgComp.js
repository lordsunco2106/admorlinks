import  React from 'react';
import './slide.scss';

function ImgComp({ src }) {
    let imgStyles = {
        width: 100 + "%",
        height: "55vh"
    };
    return <img src={src}  alt="slide-img" style={imgStyles}></img>;
}

export default ImgComp;