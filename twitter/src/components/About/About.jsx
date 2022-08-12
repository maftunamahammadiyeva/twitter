import React from "react";
import "./about.css";
import Backround from "../../assets/backround.png";
import Bobur from "../../assets/bobur.png";
import Location from "../../assets/location.svg";
import Connection from "../../assets/ulanish.svg";
import Born from "../../assets/born.svg";
import Journey from "../../assets/journey.svg";
import Tweets from "./Tweets/Tweets";
function About(props) {
  return (
    <div className="border">
      <img src={Backround} alt="bacround" width="730" height="280" />
      <div className="about d-flex justify-content-between align-items-center p-3">
        <img className="" src={Bobur} alt="photo" width="150" height="150" />
        <button className="btn btn-outline-secondary text-dark fw-bold rounded-5">
          Edit profile
        </button>
      </div>
      <div className="p-3">
        <h4 className=" fw-bolder">Bobur</h4>
        <p className="m-0">@bobur_mavlonov</p>
        <p className="m-0">
          UX&UI designer at{" "}
          <a href="#" className="text-primary link">
            @abutechuz
          </a>
        </p>
      </div>
      <ul className="d-flex justify-content-between m-3 p-0 ">
        <li className="d-flex">
          <img src={Location} alt="icon" width="24" height="24" />
          <p>Mashag’daman</p>
        </li>
        <li className="d-flex">
          <img src={Connection} alt="icon" width="24" height="24" />
          <a className="about__link" href="#">
            t.me/boburjon_mavlonov
          </a>
        </li>
        <li className="d-flex">
          <img src={Born} alt="icon" width="24" height="24" />
          <p>Born November 24, 2000</p>
        </li>
        <li className="d-flex">
          <img src={Journey} alt="icon" width="24" height="24" />
          <p>Joined May 2020</p>
        </li>
      </ul>
      <ul className="follow d-flex m-0 p-0 ms-3">
        <li>
          <p>
            <span className="fw-bold me-2">67</span>Following
          </p>
        </li>
        <li className="ms-5">
          <p>
            <span className="fw-bold me-2">47</span>Followers
          </p>
        </li>
      </ul>
      <Tweets />
    </div>
  );
}

export default About;
