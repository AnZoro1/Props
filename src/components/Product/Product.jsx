import React from 'react'
import style from './Product.module.css'
const Product = (props) => {
  return (
    <div className={style.product}>
      <img className={style.li} src={props.image} alt="picture" />
      <div className={style.price}>{props.price}</div>
      <br />
      <div className={style.name}> {props.name}</div>
    </div>
  )
}

export default Product
