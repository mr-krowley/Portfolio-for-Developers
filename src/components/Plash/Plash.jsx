import React from 'react'
import plashStyle from './Plash.module.css'
import { PlashIcon } from '../../ui/PlashIcon/PlashIcon'
import plashka from './assets/arrow.svg'
import plashka2 from './assets/ball.svg'
import plashka3 from './assets/plus.svg'
export const Plash = () => {
	return (
		<div className={plashStyle.plash}>
			<PlashIcon src={plashka}/>
			<PlashIcon src={plashka2}/>
			<PlashIcon src={plashka3}/>
		</div>
	)
}
