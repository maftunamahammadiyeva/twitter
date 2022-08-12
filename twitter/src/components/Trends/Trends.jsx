import React from "react";
import Settings from "../../assets/settings.svg";
import More from "../../assets/nuqta.svg";
import "./trends.css";

function Trends(props) {
  return (
    <div>
      <div className="wrapper mt-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Trends for you</h3>
          <img src={Settings} alt="icon" width="24" height="24" />
        </div>
        <ul className="trends__list">
          <li className="d-flex justify-content-between align-items-baseline mt-3">
            <div>
              <p className="p-0 m-0 opacity-50">Trending in Germany</p>
              <h4>Revolution</h4>
              <p className="p-0 m-0 opacity-50">Revolution</p>
            </div>
            <img src={More} alt="icon" width="17" height="4" />
          </li>
          <li className="d-flex justify-content-between align-items-baseline mt-3 ">
            <div>
              <p className="p-0 m-0 opacity-50">Trending in Germany</p>
              <h4>Revolution</h4>
              <p className="p-0 m-0 opacity-50">Revolution</p>
            </div>
            <img src={More} alt="icon" width="17" height="4" />
          </li>
          <li className="d-flex justify-content-between align-items-baseline mt-3 ">
            <div>
              <p className="p-0 m-0 opacity-50">Trending in Germany</p>
              <h4>Revolution</h4>
              <p className="p-0 m-0 opacity-50">Revolution</p>
            </div>
            <img src={More} alt="icon" width="17" height="4" />
          </li>
        </ul>
        <button className="mt-4 trends__button">Show more</button>
      </div>
    </div>
  );
}

export default Trends;
