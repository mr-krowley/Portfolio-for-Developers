import React from 'react'
import { Card } from '../../UI/card_project/Card.jsx';
import { data } from '../../UI/card_project/Card_project.js';
import s from './ContainersCards.module.css'
export const ContainerCards = () => {
  return (
    <>
      <div className="wrapper">
        <div className={s.containerCard}>
          {data.map((elem) => (
            <Card key={elem.id} el={elem} />
          ))}
        </div>
      </div>
    </>
  );
}

