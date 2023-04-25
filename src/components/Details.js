import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            Keyfeatures,
            space,
            camera,
            OS,
            processor,
            dimensions,
            others,
            battery,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-yellow my-1">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-4 mt-4">
                  <img src={img} className="img-fluid" alt="product"></img>
                </div>
                <div className="col-10 mx-auto col-md-8 my-1 text-capitalize">
                  <h4 className="text-title text-uppercase my-2">{company}</h4>
                  <h4 className="text-yellow">
                    <strong>
                      PRICE : <span>&#8358;</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold">
                    <strong>Key Features:</strong>{" "}
                  </p>
                  <p className="text-yellow">{Keyfeatures}</p>
                  <p className="text-yellow">{space}</p>
                  <p className="text-yellow">{camera}</p>
                  <p className="text-yellow">{OS}</p>
                  <p className="text-yellow">{processor}</p>
                  <p className="text-yellow">{dimensions}</p>
                  <p className="text-yellow">{others}</p>
                  <p className="text-yellow">{battery}</p>
                </div>
                <div>
                  <Link to="/">
                    <ButtonContainer>Home</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
