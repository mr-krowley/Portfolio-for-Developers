import React, {useState } from "react";
import { ContainerCards } from "../components/containerCards/ContainerCards";
import { AccordionProjectsUI } from "../UI/AccordionProjectsUI/AccordionProjectsUI";
import s from "./Project.module.css"

export const Projects = () => {
  const [active, setActive] = useState("");
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <AccordionProjectsUI
          title="projects"
          active={active}
          setActive={setActive}
        />
      </div>
      <div className={s.container2}>
        <ContainerCards />
      </div>
    </div>
  );
};
