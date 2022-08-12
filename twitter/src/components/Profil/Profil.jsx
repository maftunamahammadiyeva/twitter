import React from "react";
import Arrow from "../../assets/Arrow.svg";
import About from "../About/About";
import ProfiList from "../ProfiList/ProfiList";
import Search from "../Search/Search";
import "./Profil.css";
function Profil(props) {
  return (
    <div className="d-flex justify-content-between container">
      <div className="wrapper">
        <div className="d-flex align-items-center border p-3">
          <img className="" src={Arrow} alt="icon" width="20" />
          <div className="ms-3">
            <h5 className="p-0 m-0 fw-bold">Bobur</h5>
            <p className="p-0 m-0 opacity-50">1,070 Tweets</p>
          </div>
        </div>
        <About />
        <ProfiList />
      </div>
      <Search />
    </div>
  );
}

export default Profil;
