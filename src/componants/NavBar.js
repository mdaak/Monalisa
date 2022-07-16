import React from 'react';
import { NavLink } from 'react-router-dom';
import  styles from "../styles/NavBar.module.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHeart, FaUserAlt } from 'react-icons/fa';
import { BsFillHandbagFill } from 'react-icons/bs';


function NavBar() {
 
  return (
    <div className={`${styles.navSection} ${styles.container}`}>
        <div className={styles.navLogo}><h1>Monalisa</h1></div>
        <ul className={styles.navManu}>
            <li><NavLink to='/home' >Home</NavLink></li>
            <li><NavLink to='/about' >About</NavLink></li>
            <li><NavLink to='/blog' >Blog</NavLink></li>
            <li><NavLink to='/contact' >Contact</NavLink></li>
        </ul>
        <div className={styles.navLogo}>
          <AiOutlineSearch/>
          <FaUserAlt/>
          <FaHeart/>
          <BsFillHandbagFill/>
        </div>
    </div>
  )
}

export default NavBar