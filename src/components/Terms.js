import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Terms extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p className="text-yellow text-uppercase">
          <strong>
            Admor Links Phone Store Sell Phones, Accessories, Laptop, we also
            provide services like Phone Swap, Software Update, Repairs, Our
            Engineer are Fast and Reliable, Amazing Offers such as BUY NOW PAY
            LATER(BNPL), EASYBUY, Discount on any Phone Purchases, Free Gifts
            and December Packages, Phones & Gadget Your satisfaction is our
            priority
          </strong>
        </p>

        <h2 className="text-title text-center text-red my-5">
          Terms and Conditions
        </h2>
        <h5 className="text-center text-title my-3">
          <strong>
            {" "}
            Hello,
            <br /> Welcome to ADMOR LINKS SYSTEM LIMITED
          </strong>
        </h5>
        <p className="term">
          We are still working on our account, kindly checkout any phones and
          products of your preferable desired
          <br /> and give us a call or visit our stores, check About us for more
          info or click this link
          <Link to="/default" className="text-red">
            {" "}
            About us{" "}
          </Link>
        </p>

        <br />
        <br />
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-capitalize text-center text-title">About us</h5>
            <p className="text-muted text-center">
              {" "}
              Call us from 8:00am to 7:00pm
            </p>
            <p className="text-red text-center contact">08068824971</p>
            <p className="text-uppercase text-center text-muted">
              <strong>Head Office: Admor links system limited,</strong> No 18b
              lalubu road, opposite glo office, beside fcmb oke-ilewo{" "}
              <strong>abeokuta,ogun state</strong>
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-center text-capitalize text-title">
              Quick Links
            </h5>
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
            <h5 className="text-center text-capitalize text-title">
              Product Categories
            </h5>
            <ul type="none" className="cate text-center">
              <li>
                <Link to="/accesslists">
                  <span className="text-yellow">Accessories</span>
                </Link>
              </li>
              <li>
                <Link to="/laptop">
                  <span className="text-yellow">Laptops</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="text-yellow">Phones</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <footer className="foots">
          <div className="text-center mt-5 foot">
            <p> &copy; 2023 Admor Links System Limited. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Terms;
