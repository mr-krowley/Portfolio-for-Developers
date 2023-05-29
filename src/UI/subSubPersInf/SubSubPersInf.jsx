// import { useState } from "react";
import React from "react";
import papka from "./aseds/papka.svg";
import sty from "./SubSubPersInf.module.css";

export const SubSubPersInf = ({children}) => {

//  const [active, setActive] = useState(false)

  return (
  //  <div className={sty.style} onClick={()=>{setActive(!active)}}> //Здесь остановился, нужна связь с TextPI.jsx
   <div className={sty.style} >
      <img src={papka} alt="close" className={sty.papka} />
      <p className={sty.mail} >
				{children}
      </p>
    </div>
  );
};
