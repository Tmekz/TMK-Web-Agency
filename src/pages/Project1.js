import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
