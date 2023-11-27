import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />
        <Logo />
        <Project projectNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Project3;
