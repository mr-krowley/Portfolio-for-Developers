import React from 'react'
import { TextHome } from '../components/TextHome/TextHome'
import { Shake } from '../components/Snake/Snake'


export const Home = () => {
  return (
    <div className="HomeCSS">
      <TextHome />
      <Shake />
      
    </div>
  );
}
