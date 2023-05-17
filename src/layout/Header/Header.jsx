import React from "react";
import { MenuLink } from "../../UI/MenuLink/MenuLink";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { list } from "./assets/keyLink";
import { LincList } from "../../components/LincList/LincList";
import { ListItem } from "../../UI/ListItem/Listitem";



export const Header = (props) => {
  return (
    <div>
      <LincList >
       {list.map(el => <ListItem key={el} name={el}/>)}
      </LincList>

      <ul className={s.ul}>
        <MenuLink name="micheal-weaver" />
        <MenuLink name="_hello" />
        <MenuLink name="_about-me" />
        <MenuLink name="_projects" />
        <MenuLink name="_contact-me" />
      </ul>
    </div>
  );
};
