import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <p>
        <b>Intocode Coding Shopcamp</b>
      </p>
      <img
        className={style.basket}
        src="https://cdn-icons-png.flaticon.com/512/5412/5412718.png"
        alt="pictureBasket"
      />
    </div>
  )
}

export default Header
