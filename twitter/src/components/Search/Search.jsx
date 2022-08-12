import React from "react";
import Searche from "../../assets/search.svg";
import "./search.css";

import Trends from "../Trends/Trends";
import Likes from "../Likes/Likes";

function Search(props) {
  return (
    <div className=" pt-2 ps-3 pe-5">
      <label className="input  rounded-5">
        <img src={Searche} alt="icon" width="24" height="24" />
        <input
          className="search ms-2"
          type="text"
          placeholder="Search Twitter"
        />
      </label>
      <Trends />
      <Likes />
    </div>
  );
}

export default Search;
