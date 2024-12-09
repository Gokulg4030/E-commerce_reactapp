import React from 'react'
import './Breadcrum.css'
import arroe_icon from '../Assets/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props
  return (
    <div className='breadcrum'>
        HOME <img src={arroe_icon} alt="" /> SHOP <img src={arroe_icon} alt="" />{product.category} <img src={arroe_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum