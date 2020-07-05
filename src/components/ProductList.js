import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";



class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="py-3">
          <div className="container">
          <p className="text-red text-uppercase"><strong>NOTE: discount</strong> on every phones and products purchased,<strong> buy now pay later available terms and condition apply</strong>
          </p>
                    
            <Title name="Admor Links" title="products"></Title>
            
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  const categories = value.categories.map((company) => {
                    return (
                      <ul type="none" className="my-3">
                      <li key={company}>
                        <a href="#company" className="text-green" onClick={() => value.filterItem(company)}>
                          {company}
                        </a>
                      </li>
                      </ul>
                    );
                  });
                  const products = (value.filteredProducts||value.products).map((product) => {
                    return <Product key={product.id} product={product} />;
                  });

                  return (
                    <React.Fragment>
                      <div className="col-4">
                        <ul>{categories}</ul>
                      </div>
                      <div className="col-8">
                        <div className="row">
                        {products}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
            <hr></hr>
            <div className="row">
                    <div className="col-md-4">
                    <h5 className="text-capitalize text-center text-title">Contact us</h5>
                    <p className="text-muted text-center"> Call us from 8:00am to 7:00pm</p>
                    <p className="text-red text-center contact">08068824971</p>
           <p className="text-uppercase text-center text-muted"><strong>Head Office: Admor links system limited,</strong> No 18b lalubu road, opposite glo office, 
           beside fcmb oke-ilewo <strong>abeokuta.</strong>
             </p>
                    </div>
                <div className="col-md-4">
                <h5 className="text-center text-capitalize text-title">Quick Links</h5>
                <Link to="/default">
                <p className="text-center text-muted">About us</p>
                </Link>
                <Link to="/terms">
                <p className="text-center text-muted">FAQS</p>
                </Link>
                <Link to="/terms">
                <p className="text-center text-muted">Order Tracking</p>
                </Link>
                <Link to="/terms">
                <p className="text-center text-muted">Terms & Conditions</p>
                </Link>
                </div>
                <div className="col-md-4">
                <h5 className="text-center text-capitalize text-title">Product Categories</h5>
                <ul type="none" className="cate text-center">
                <li>
                <Link to="/accesslists"><span className="text-muted">Accessories</span>
                </Link>
                </li>
                <li>
                <Link to="/laptop"><span className="text-muted">Laptops</span>
                </Link>
                </li>
                <li>
                <Link to="/"><span className="text-muted">Phones</span>
                </Link>
                </li>
                
                 </ul>
                </div>


            </div>
       <footer className="foots">
                <div className="text-center mt-5 foot">
           <p> &copy; 2020  Admor Links System Limited. All Rights Reserved</p>
           </div>
                     
           </footer>
      </React.Fragment>
      // <Product></Product>
    );
  }
}

export default ProductList;

