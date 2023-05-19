import React, { useState } from "react";
import { AccordianFind_My_Also_In } from '../../UI/accordianFind_My_Also_In/AccordianFind_My_Also_In';



export const Find_My_Also_In = () => {


   const [active, setActive] = useState("");

  return (
    <>
      <AccordianFind_My_Also_In title="find-me-also-in" active={active} setActive={setActive} />
    </>
    
  );
}
