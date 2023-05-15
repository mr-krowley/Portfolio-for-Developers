import React from 'react'
import {  } from "module";
import { User } from '../../UI/user/User';
import { Hello } from '../../UI/hello/Hello';

export const Header = () => {
  return (
    <div>
      <ul>
        <li><User></User></li>
        <li><Hello></Hello></li>
        <li><a href="">_about-me</a></li>
        <li><a href="">_projects</a></li>
        <li><a href="">_contact-me</a></li>
      </ul> 
    </div>
  )
}
