import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./styles.css";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="logo-holder">
            <a href="/">
              <Logo />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
