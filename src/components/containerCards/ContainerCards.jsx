import React from 'react'
import { Card } from '../../ui/CardProject/CardProject.jsx';
import { data } from '../../ui/CardProject/CardProject.js';
import close_icon from '../../ui/Icons/close-icon.svg'
import s from './ContainersCards.module.css'
export const ContainerCards = () => {
  return (
    <>
      <div className="wrapper">
        <div className={s.wrapper__title}>
          <div className={s.textPI__title}>
            university
            <img src={close_icon} alt="close" />
          </div>
        </div>
        <div className={s.containerCard}>
          {data.map((elem) => (
            <Card key={elem.id} el={elem} />
          ))}
        </div>
      </div>
    </>
  );
}

