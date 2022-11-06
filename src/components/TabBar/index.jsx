import React from 'react'
import styles from './styles.module.css'
import { useLocation, Link } from 'react-router-dom'
import { BiHomeAlt, BiUserCircle } from 'react-icons/bi'
import { HiOutlineCreditCard } from 'react-icons/hi'
import { RiBillLine } from 'react-icons/ri'
import { AiOutlineRocket } from 'react-icons/ai'

const TabBar = () => {
  const location = useLocation()

  return (
    <div className={styles.navigation}>
      <ul>
        <li
          className={`${styles.list} ${
            location.pathname === '/home' ? styles.active : null
          }`}
        >
          <Link name="home" to="home" className={styles.buttonStyle}>
            <BiHomeAlt className={styles.icon} />
            <span className={styles.text}>Início</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            location.pathname === '/cards' ? styles.active : null
          }`}
        >
          <Link to="cards" className={styles.buttonStyle} name="cards">
            <HiOutlineCreditCard className={styles.icon} />
            <span className={styles.text}>Cartões</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            location.pathname === '/shopping' ? styles.active : null
          }`}
        >
          <Link to="/shopping" className={styles.buttonStyle} name="shopping">
            <AiOutlineRocket className={styles.icon} />
            <span className={styles.text}>Loja</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            location.pathname === '/payments' ? styles.active : null
          }`}
        >
          <Link className={styles.buttonStyle} name="payments" to="/payments">
            <RiBillLine className={styles.icon} />
            <span className={styles.text}>Pagar</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            location.pathname === '/profile' ? styles.active : null
          }`}
        >
          <Link to="/profile" className={styles.buttonStyle} name="profile">
            <BiUserCircle className={styles.icon} />
            <span className={styles.text}>Perfil</span>
          </Link>
        </li>
        <div className={styles.indicator}></div>
      </ul>
    </div>
  )
}

export default TabBar
