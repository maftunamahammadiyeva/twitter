import React from "react";
import "./likes.css";
import Mushtariy from "../../assets/mushtariy.png";
import Shuhrat from "../../assets/shuhrat.png";
function Likes(props) {
  return (
    <div className="likes p-3 mt-4">
      <h4 className="fw-bolder">You might like</h4>
      <ul className="likes__list">
        <li className="d-flex justify-content-around mt-3">
          <img src={Mushtariy} alt="photo" width="60" height="60" />
          <div>
            <h6 className="p-0 m-0">Mushtariy</h6>
            <p className="p-0 m-0">@Mushtar565266</p>
          </div>
          <button className="btn btn-dark rounded-5">Follow</button>
        </li>

        <li className="d-flex justify-content-around mt-2">
          <img src={Shuhrat} alt="photo" width="60" height="60" />
          <div>
            <h6 className="p-0 m-0">Shuhratbek</h6>
            <p className="p-0 m-0">@mrshukhrat</p>
          </div>
          <button className="btn btn-dark rounded-5">Follow</button>
        </li>
      </ul>
      <button className="mt-4 trends__button">Show more</button>
    </div>
  );
}

export default Likes;
