import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { themeContext } from "../../contexts/themeContext.jsx";


const Header = () => {
  const [isDark, setIsDark] = useContext(themeContext)
  return (
    <header className={`${isDark ? 'dark': ''}`}>
        <div className={styles.where_line}>
            Where in the World?
        </div>
        <div className={styles.mode} onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
            <img src={`https://animated-jelly-4922bf.netlify.app/moon-${isDark?'solid-svgrepo-com':'regular'}.svg`} height="20" alt=""/>
            <div>{isDark?'Light Mode':'Dark Mode'}</div>
        </div>
    </header>
  )
}

export default Header
