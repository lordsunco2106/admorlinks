import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
           <ProductConsumer>
           {(value)=>{
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
                inCart
            } = value.detailProduct;
            return(
                <div className="container py-5">
                <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-green my-1">
                <h1>{title}</h1>
                </div>
                </div>
                <div className="row">
                <div className="col-10 mx-auto col-md-4 mt-4">
                <img src={img} className="img-fluid" alt="product">
                </img>                
                </div>
                <div className="col-10 mx-auto col-md-8 my-1 text-capitalize">
                <h4 className="text-title text-uppercase text-muted my-2">{company}</h4> 
                <h4 className="text-green"><strong>
                PRICE : <span>&#8358;</span>{price}
                </strong></h4>            
                <p className="font-weight-bold"><strong>Key Features:</strong> </p> 
                <p className="text-muted">{Keyfeatures}</p>
                <p className="text-muted">{space}</p>
                <p className="text-muted">{camera}</p>
                <p className="text-muted">{OS}</p>
                <p className="text-muted">{processor}</p>
                <p className="text-muted">{dimensions}</p>
                <p className="text-muted">{others}</p>
                <p className="text-muted">{battery}</p> 
                </div>
                <div>
                <Link to="/">
                <ButtonContainer>
                Back to Products
                </ButtonContainer>
                </Link>
                <ButtonContainer cart disabled={inCart?true:false}
                onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                }}
                >
                {inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
                </div>
                </div>
               </div>
               )
           }}
           </ProductConsumer>
        );
    }
}

export default Details;
