import React from "react";
import Navbar from "../../componenets/navbar/Navbar";

import "./home.css";

function Home() {
  return (
    <div className="home-bg">
      <Navbar />
      <div className="home-body">
        <div className="home-text-area">
          <h1 className="home-upper-text">so, You want to travle to</h1>
          <h1 className="big-text">space</h1>
          <p>
            let's face it:if you want to go to space you might as well genuiely
            go to outer space and not hover kinda on the edge of it, well sit
            back and relax because we will give you a truly out of the world
            experience
          </p>
        </div>
        <div className="side-text">
          <h1>explore</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
