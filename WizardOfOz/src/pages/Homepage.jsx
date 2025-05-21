import React from "react";
import thumbnail from "../assets/fairytale/thumbnail.jpg";

function Homepage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main content of the homepage.</p>
      <img src={thumbnail} alt="" />
    </div>
  );
}

export default Homepage;