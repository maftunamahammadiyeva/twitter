import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import Search from "../Search/Search";
function Main(props) {
  return (
    <>
      <div className="w-100 d-flex justify-content-between">
        <div>
          <Header />
          <List />
        </div>
        <Search />
      </div>
    </>
  );
}

export default Main;
