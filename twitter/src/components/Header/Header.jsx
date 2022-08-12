import React from "react";
import Star from "../../assets/Customize.svg";

function Header(props) {
  return (
    <div>
      <header className="d-flex justify-content-between p-3 border">
        <h3 className="fw-bold">Home</h3>
        <img src={Star} alt="icon" width="24" height="24" />
      </header>
    </div>
  );
}

export default Header;
