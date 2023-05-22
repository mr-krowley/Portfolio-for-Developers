import React from 'react'
import { Link } from "react-router-dom";
import { Project } from '../components/Project/Project';


export const Projects = () => {
  return (
    <>
      <div>
        <Project/>
      </div>
      <Link to="/">Home</Link>
      
    </>
  );
}
