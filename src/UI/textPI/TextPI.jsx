import React from 'react'
import styl from "./TextPI.module.css"
import xxx from './assets/del.svg'
// import { SubSubPersInf } from '../subSubPersInf/SubSubPersInf'



export const TextPI = () => {
	const university = <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, animi rerum asperiores, exercitationem nobis aliquam expedita praesentium aut nostrum unde debitis a modi harum molestias ad quisquam voluptatibus possimus! Sequi perspiciatis numquam, libero cumque id odit quaerat quos quae facere obcaecati quasi eos similique. Quasi ratione hic veritatis nobis perferendis. Officiis facilis quae consectetur, sequi dignissimos, vel eum dicta facere possimus soluta error obcaecati in? Doloremque molestias veniam animi voluptas? Molestias exercitationem sint recusandae delectus corporis soluta, repudiandae natus fugiat perferendis minima vitae dolore a. Iste ducimus impedit quos optio quam minima expedita rem cupiditate. Numquam et assumenda maiores qui.</div>                 
	return (
		<div className={styl.container}>
			<div className={styl.wrapper__title}>
				<div className={styl.textPI__title}>university <img width={"11px"} src={xxx} alt="" /></div>
			</div>
			<div className={styl.wrapper}>
				<div className={styl.textPI__main}>{university}</div>
				<div className={styl.textPI__sub}>{university}</div>
			</div>
		</div>
	)
}
