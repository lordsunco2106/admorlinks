import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Title from "./Title";
import { accessories } from "../access";

function searchingFor(cools) {
  return function (c) {
    return c.owner.toLowerCase().includes(cools.toLowerCase()) || !cools;
  };
}

class AccessLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: accessories,
      cools: " ",
    };
    this.searchHand = this.searchHand.bind(this);
  }
  searchHand(event) {
    this.setState({ cools: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <p className="text-red text-uppercase mt-0">
              <strong>NOTE: discount</strong> on every phones and products
              purchased,
              <strong>
                {" "}
                buy now pay later available terms and condition apply
              </strong>
            </p>

            <Title name="Admor Links" title="accessories"></Title>

            <div className="text-center my-5">
              <form>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="searchstyle"
                  onChange={this.searchHand}
                ></input>
              </form>
            </div>

            {this.state.accessories
              .filter(searchingFor(this.state.cools))
              .map((but) => (
                <div key={accessories.rep}>
                  <div className="row my-3 ">
                    <div className="col-md-4">
                      <p>
                        <img
                          src={but.photo}
                          className="img-fluid"
                          alt="product"
                        ></img>
                      </p>
                    </div>

                    <div className="col-md-8">
                      <div className="col-md-3">
                        <p>{but.owner}</p>
                        <p>{but.made}</p>
                      </div>

                      <div className="col-md-3">
                        <p>{but.features}</p>
                        <p>{but.version}</p>
                      </div>

                      <div className="col-md-3">
                        <p>{but.size}</p>
                        <p>{but.btty}</p>
                      </div>

                      <p>
                        PRICE : <span>&#8358;</span>
                        {but.amount}
                      </p>
                      <Link to="/default">
                        <button className="btn btn-primary text-uppercase">
                          Proceed
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-capitalize text-center text-title">
              Contact us
            </h5>
            <p className="text-muted text-center">
              {" "}
              Call us from 8:00am to 7:00pm
            </p>
            <p className="text-red text-center contact">08068824971</p>
            <p className="text-uppercase text-center text-muted">
              <strong>Head Office: Admor links system limited,</strong> No 18b
              lalubu road, opposite glo office, beside fcmb oke-ilewo{" "}
              <strong>abeokuta.</strong>
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-center text-capitalize text-title">
              Quick Links
            </h5>
            <Link to="/default">
              <p className="text-center text-muted">About us</p>
            </Link>
            <Link to="/default">
              <p className="text-center text-muted">FAQS</p>
            </Link>
            <Link to="/default">
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
                  <span className="text-muted">Accessories</span>
                </Link>
              </li>
              <li>
                <Link to="/laptop">
                  <span className="text-muted">Laptops</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="text-muted">Phones</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <footer className="foots">
          <div className="text-center mt-5 foot">
            <p> &copy; 2020 Admor Links System Limited. All Rights Reserved</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default AccessLists;
