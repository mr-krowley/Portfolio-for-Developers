import React, { Children } from 'react'
import s from "./ProjectLink.module.css"

export const ProjectLink = ({icon, children}) => {
	return (
		<>
      <label className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={icon} alt="vue" />
        {children}
      </label>
    </>
	)
}
