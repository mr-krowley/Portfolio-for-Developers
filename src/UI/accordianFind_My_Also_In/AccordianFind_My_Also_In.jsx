import React from 'react'
import s from "./AccordianFind_My_Also_In.module.css"
import triangle from "./svg/Vector1.svg"
import { YouTubeChannel } from '../YouTube_channel/YouTubeChannel';
import { GuruShotsProfile } from '../GuruShots_profile/GuruShotsProfile';
import { InstagramAccaunt } from '../Instagram_accaunt/InstagramAccaunt';
import { TwichProfile } from '../Twich_profile/TwichProfile';

export const AccordianFind_My_Also_In = ({ title, active, setActive }) => {
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
