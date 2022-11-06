import avatar from '../../assets/avatar-7.png'
import styles from './styles.module.css'
import creditCard from '../../assets/credit-card.png'
import { BsBell } from 'react-icons/bs'
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.userDiv}>
        <div className={styles.profileInfo}>
          <img src={avatar} alt="avatar" className={styles.imageStyle} />
          <div>
            <p style={{ fontSize: '14px' }}>Olá</p>
            <p className={styles.username}>Unidos do Café</p>
          </div>
        </div>
        <button className={styles.notificationsButton}>
          <BsBell size={24} />
        </button>
      </div>
      <div className={styles.ccDiv}>
        <img src={creditCard} alt="credit card" />
      </div>
    </div>
  )
}
