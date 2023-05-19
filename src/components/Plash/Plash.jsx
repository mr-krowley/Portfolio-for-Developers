import React from 'react'
import plashStyle from './Plash.module.css'
import { PlashIcon } from '../../UI/plashIcon/PlashIcon'
import plashka from './aseds/arrow.svg'
import plashka2 from './aseds/ball.svg'
import plashka3 from './aseds/plus.svg'
export const Plash = () => {
	return (
		<div className={plashStyle.plash}>
			<PlashIcon src={plashka}/>
			<PlashIcon src={plashka2}/>
			<PlashIcon src={plashka3}/>
		</div>
	)
}
