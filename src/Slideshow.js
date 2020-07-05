import React, { Component } from "react";


const s = {
    container: "fullW fullH rel odd overflowH",
    onScreen: " ",
    offScreenRight: " ",
    offScreenLeft: " ",
    transition: " "
};

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: {
                id: 0,
                
                transition: true
            },
            currentId: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }
    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    setSlideState = (slide1, currentId) => {
        this.setState({
            slide1: slide1,
            
            currentId: currentId
        });
    };

    transitionSlides = () => {
        const { slide1 } = this.state;
        let currentId;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
           
            
        } else {
            slide1["position"] = s.onScreen;
           
            currentId = slide1.id;
        }
        this.setSlideState(slide1, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    resetSlideOffScreen = () => {
        const { slide1, currentId } = this.state;
        const { slides } = this.props;
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
            slide1["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        } else {
          
        }
        this.setSlideState(slide1, currentId);
        this.resetSlideTransitions(slide1, currentId);
    };

    resetSlideTransitions = (slide1, currentId) => {
        setTimeout(() => {
            slide1["transition"] = true;
            
            this.setSlideState(slide1, currentId);
        }, 500);
    };

    render() {
        const { slide1 } = this.state;
        const { slides } = this.props;
        return (
            <div className={s.container}>
                
                   {slides[slide1.id]}
                    {slide1.position}
                    {slide1.transition ? s.transition : ""}      
                
            </div>
        );
    }
}

export default SlideShow;