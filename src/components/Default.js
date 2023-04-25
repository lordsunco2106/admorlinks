import React, { Component } from "react";
import "../App.css";

class Default extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-title text-center mb-5 text-yellow">About</h1>
        <div className="row">
          <div className="col-md-3">
            <h4 className="text-capitalize text-center text-title">
              HEAD OFFICE
            </h4>
            <p className="text-uppercase">
              <strong>Admor links system limited,</strong> No 18b lalubu road,
              opposite glo office, beside fcmb oke-ilewo{" "}
              <strong>abeokuta.</strong>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="text-capitalize text-center text-title">
              BRANCH OFFICE
            </h4>
            <p className="text-uppercase">
              <strong>Admor links system building,</strong>ibafo bus-stop,
              beside palace <strong>ibafo.</strong>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="text-capitalize text-center text-title">
              BRANCH OFFICE
            </h4>
            <p className="text-uppercase">
              <strong>
                97,Alagbole-Akute Road,Beside Nepa Office,Akute, Ogun State.
              </strong>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="text-capitalize text-center text-title">
              SOCIAL MEDIA
            </h4>
            <p className="text-uppercase"><strong>
                Branch Office: Iyana Coker Bus Stop, Lagos- Express Road,
                Ifo,Ogun State.
              </strong>
              you can click any of the links below to contact us via
              <strong>facebook</strong> and <strong>instagram pages.</strong>
            </p>
            <span className="links">
              <a href="https://web.facebook.com/admorlinks/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </span>
            <span className="links-1">
              <a href="https://www.instagram.com/admorlinks/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </span>
            <hr></hr>
            <span className="links-2">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </span>
            <strong>08068824971, 07066296347</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
