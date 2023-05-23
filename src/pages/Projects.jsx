import React, {useState } from "react";
import { Link } from "react-router-dom";
import { ContainerCards } from "../components/containerCards/ContainerCards";
import { AccordionProjectsUI } from "../UI/AccordionProjectsUI/AccordionProjectsUI";
import s from "./Project.module.css"

export const Projects = () => {
  const [active, setActive] = useState("");
  return (
    <div className={s.wrapper}>
      <AccordionProjectsUI
        title="projects"
        active={active}
        setActive={setActive}
      />
      <ContainerCards />
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};
