import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
