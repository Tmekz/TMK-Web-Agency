import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export default Project2;
