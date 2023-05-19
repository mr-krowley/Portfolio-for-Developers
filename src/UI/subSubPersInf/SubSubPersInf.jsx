import React from 'react'
import papka from './aseds/papka'
import sty from './SubSubPersInf.module.css'

export const SubSubPersInf = () => {
	return (
		<div className={sty.style}>
		<img src={papka} alt="close" className={sty.papka}/>
		<p className={sty.mail}>
			{children}
		</p>
	</div>
	)
}
