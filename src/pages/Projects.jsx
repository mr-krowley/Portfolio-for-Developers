import React from 'react'
import { Link } from "react-router-dom";
import { ProjectsSelect } from '../components/ProjectsSelect/ProjectsSelect';


export const Projects = () => {
  return (
    <>
      <div>Projects</div>
      <Link to="/">Home</Link>
      <ProjectsSelect/>
    </>
  );
}
