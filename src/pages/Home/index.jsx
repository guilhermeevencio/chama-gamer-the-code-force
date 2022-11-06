import { Header } from '../../components/Header'
import styles from './styles.module.css'
import acoes from '../../assets/acoes-rapidas.svg'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.actions}>
        <Link to="/actions">
          <img src={acoes} alt="not implemented section" />
        </Link>
      </div>
    </div>
  )
}
