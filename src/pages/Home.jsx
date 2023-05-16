import React from 'react'
import { TextHome } from '../components/TextHome/TextHome'
import { Shake } from '../components/Shake/Shake'
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="HomeCSS">
      <TextHome />
      <Shake />
      <Link to="about_me" >about_me</Link>
    </div>
  );
}
