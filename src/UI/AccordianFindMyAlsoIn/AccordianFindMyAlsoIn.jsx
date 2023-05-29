import React from 'react'
import s from "./AccordianFindMyAlsoIn.module.css"
import triangle from "./svg/Vector1.svg"
import { YouTubeChannel } from '../YouTubeChannel/YouTubeChannel';
import { GuruShotsProfile } from '../GuruShotsProfile/GuruShotsProfile';
import { InstagramAccaunt } from '../InstagramAccaunt/InstagramAccaunt';
import { TwichProfile } from '../TwichProfile/TwichProfile';

export const AccordianFindMyAlsoIn = ({ title, active, setActive }) => {
  return (
    <>
      <div className={s.accordian_box}>
        <div className={s.acordionHeiding}>
          <div
            className={s.containerContacts}
            onClick={() => {
              active === title ? setActive("") : setActive(title);
            }}
          >
            <img
              src={triangle}
              alt="close"
              className={
                active === title
                  ? s.accordion_heading_active
                  : s.accordion_heading_not_active
              }
            />
            <p>{title}</p>
          </div>
        </div>

        <div className={active === title ? s.show : s.accordionContent}>
          <div className="container">
            <YouTubeChannel />
            <GuruShotsProfile />
            <InstagramAccaunt />
            <TwichProfile/>
          </div>
        </div>
      </div>
    </>
  );
};
