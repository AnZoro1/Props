import React from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'
import Sidepanel from '../Sidepanel/Sidepanel'
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Sidepanel/>
      <Products />
    </div>
  )
}

export default App
