import React from "react";
import Twittlogo from "../../assets/logo.svg";
import Home from "../../assets/home.svg";
import Explore from "../../assets/reshodka.svg";
import Notis from "../../assets/qongiroq.svg";
import Massege from "../../assets/massage.svg";
import Bookmarks from "../../assets/bookmarks.svg";
import Lists from "../../assets/lists.svg";
import Profil from "../../assets/profil.svg";
import More from "../../assets/more.svg";
import { Link } from "react-router-dom";

function Sitebar(props) {
  return (
    <>
      <div className="sitebar w-25 d-flex justify-content-center flex-column mt-3">
        <img
          className="mx-auto"
          src={Twittlogo}
          alt=""
          width="40"
          height="33"
        />
        <ul className="mx-auto mt-3">
          <li className="d-flex align-items-center mt-2">
            <Link to="/main">
              <img src={Home} alt="icon" width="24" height="24" />
              <p className="ms-2">Home</p>
            </Link>
          </li>
          <li className="d-flex align-items-start mt-2">
            <img src={Explore} alt="icon" width="24" height="24" />
            <p className="ms-2">Explore</p>
          </li>
          <li className="d-flex align-items-start mt-2">
            <img src={Notis} alt="icon" width="24" height="24" />
            <p className="ms-2">Notifications</p>
          </li>
          <li className="d-flex align-items-start mt-2">
            <img src={Massege} alt="icon" width="24" height="24" />
            <p className="ms-2">Massages</p>
          </li>
          <li className="d-flex align-items-start mt-2">
            <img src={Bookmarks} alt="icon" width="24" height="24" />
            <p className="ms-2">Bookmarks</p>
          </li>
          <li className="d-flex align-items-start mt-2">
            <img src={Lists} alt="icon" width="24" height="24" />
            <p className="ms-2">Lists</p>
          </li>
          <li className="d-flex align-items-start mt-2">
            <Link to="/profil">
              <img src={Profil} alt="icon" width="24" height="24" />
              <p className="ms-2">Profile</p>
            </Link>
          </li>
          <li className="d-flex align-items-start">
            <img src={More} alt="icon" width="24" height="24" />
            <p className="ms-2">More</p>
          </li>
        </ul>
        <button className="btn btn-primary rounded-5 w-75 mx-auto">
          Tweet
        </button>
      </div>
    </>
  );
}

export default Sitebar;
