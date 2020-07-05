import React from "react";


const s = {
    container: "abs fullW fullH",
    slideImage: "fullHeighted fullWidthed imgCover"
};

const Slide = ({ position, transition, image }) => {
    return (
        <div className={s.container + " " + position + " " + transition}>
            <img src={image} className={s.slideImage} alt="slide" />
        </div>
    );
};

export default Slide;