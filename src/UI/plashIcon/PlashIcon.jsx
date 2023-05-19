import React from 'react'
import plashIcons from './PlashIcon.module.css'
export const PlashIcon = ({src}) => {
	return (
<img className={plashIcons.imgIcon} src= {src} alt="img" />
	)
}
