import React from 'react'
import { Twitter } from "../../ui/Twitter/Twitter";
import {Facebook} from "../../ui/Facebook/Facebook"
import { Find } from '../../ui/Find/Find';
import { Github } from '../../ui/Github/Github';
import { Username } from '../../ui/Username/Username';
import s from "./Footer.module.css"

export const Footer = () => {
  return (
    <div>
      <div className={s.footer_style}>
        <Find />
        <Twitter />
        <Facebook />
        <Username />
        <Github />
      </div>
    </div>
  );
}
