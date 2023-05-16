import React from 'react'
import s from './MenuLink.module.css'

export const MenuLink = ({name}) => {
	return (
		<li className = {s.li} ><a href="#" className={s.a}>{name}</a></li>
	)
}

