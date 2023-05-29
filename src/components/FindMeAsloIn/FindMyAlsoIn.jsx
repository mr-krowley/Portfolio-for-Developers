import React, { useState } from "react";
import { AccordianFindMyAlsoIn } from '../../ui/AccordianFindMyAlsoIn/AccordianFindMyAlsoIn';



export const FindMyAlsoIn = () => {


   const [active, setActive] = useState("");

  return (
    <>
      <AccordianFindMyAlsoIn title="find-me-also-in" active={active} setActive={setActive} />
    </>
    
  );
}
