import React, { useState } from "react";
import vector2 from "./aseds/Vector2.svg";
import st from "./SubPersInfo.module.css";
import { AccordionSPI } from "../AccordionSPI/AccordionSPI";

export const SubPersInf = ({ src2, children }) => {
  const [active3, setActive3] = useState("");

  return (<>
    <div className={st.style}>
      {/* <img src={vector2} alt="close" className={st.vector2} /> */}
      {/* <img src={src2} alt="" className={st.src2} /> */}
      {/* <p className={st.mail}>{children}</p> */}
    </div>
	<div>
	<AccordionSPI src = {src2} treug = {vector2} title = {children} active3={active3} setActive3={setActive3}> </AccordionSPI>
	</div>
		</>
		  );
};
