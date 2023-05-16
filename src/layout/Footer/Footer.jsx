import React from 'react'
import { Twitter } from "../../UI/Twitter/Twitter";
import {Facebook} from "../../UI/Facebook/Facebook"
import { Find } from '../../UI/Find/Find';
import { Github } from '../../UI/Github/Github';
import s from "./Footer.module.css"

export const Footer = () => {
  return (
    <div>
    <div className={s.footer_style}>
        <Find />
        <Facebook />
        <Github />
        <Twitter />
      </div>
    </div>
  );
}
