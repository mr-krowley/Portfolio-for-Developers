import React from "react";

import s from "./Header.module.css";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div>
      <ul className={s.ul}>
        <li className={s.li}>micheal-weaver</li>
        <li className={s.li}>
          <Link to="/">_hello</Link>
        </li>
        <li className={s.li}>
          <Link to="_about_me">_about</Link>
        </li>
        <li className={s.li}>
          <Link to="projects_me">_projects</Link>
        </li>
        <li className={s.li}>
          <Link to="contact-me">_contact_me</Link>
        </li>
      </ul>
    </div>
  );
};
