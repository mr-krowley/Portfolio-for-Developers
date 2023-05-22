import React from 'react'
import { Link } from "react-router-dom";
import { ContainerCards } from '../components/containerCards/ContainerCards';
export const Projects = () => {
  return (
    <>
     <ContainerCards/> 
      <Link to="/">Home</Link>
    </>
  );
}
