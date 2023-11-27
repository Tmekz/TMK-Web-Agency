import React from "react";
import Navigations from "../components/Navigations";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicTexte from "../components/DynamicTexte";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigations />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>TMK-DEV Web AGENCY</h1>
            <h2>
              <DynamicTexte />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
