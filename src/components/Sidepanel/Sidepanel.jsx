import React from 'react'
import style from './Sidepanel.module.css'

const Sidepanel = () => {
  return (
    <div className={style.sidepanel}>
      <ul>
        <li className={style.li}>Гаджеты и аксессуары</li>
        <hr className={style.line} />

        <li className={style.li}>Бытовая техника</li>
        <hr className={style.line} />

        <li className={style.li}>Прочее</li>
        <hr className={style.line} />
      </ul>
    </div>
  )
}

export default Sidepanel
