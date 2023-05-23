import React from "react";
import { AccordionProjectsUI } from "../../UI/AccordionProjectsUI/AccordionProjectsUI";
import { useState } from "react";

export const Project = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <AccordionProjectsUI
        title="Project"
        active={active}
        setActive={setActive}
      />
    </>
  );
};
