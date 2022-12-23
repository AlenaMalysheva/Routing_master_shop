import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={s.nav_menu}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/categories'>Categoties</Link>
    </nav>
  )
}
