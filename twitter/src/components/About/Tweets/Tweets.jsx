import React from "react";

function Tweets(props) {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-light">Tweets</button>
        <button className="btn btn-light">Tweets & replies</button>
        <button className="btn btn-light">Media</button>
        <button className="btn btn-light">Likes</button>
      </div>
      <div className="w-100 h-25"></div>
    </div>
  );
}

export default Tweets;
