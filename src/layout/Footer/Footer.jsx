import React from 'react'
import { Twitter } from "../../UI/Twitter/Twitter";
import {Facebook} from "../../UI/Facebook/Facebook"
import { Find } from '../../UI/Find/Find';
import { Github } from '../../UI/Github/Github';

export const Footer = () => {
  return (
    <div>
      <Find/>
      <Facebook/>
      <Github/>
      <Twitter/>
    </div>
  );
}
