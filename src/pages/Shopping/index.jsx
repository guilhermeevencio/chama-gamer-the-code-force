import styles from './styles.module.css'
import { FiSearch } from 'react-icons/fi'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import productCard from '../../assets/product-card.svg'
import productDemonstration from '../../assets/products-demonstration.svg'

export function Shopping() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.navbar}>
          <h3>A loja gamer para você, gamer</h3>
          <FiSearch size={24} />
        </div>
        <div className={styles.balanceSection}>
          <span className={styles.balanceContainer}>
            <p>Meu saldo</p>
            <h1>900</h1>
            <img src={logo} alt="logo" />
          </span>
          <p>+ Adicionar pontos</p>
        </div>
      </div>
      <div className={styles.shoppingBody}>
        <Link to="/checkout" className={styles.linkImage}>
          <img src={productCard} alt="cadeira gamer" />
        </Link>
      </div>
      <Link to="/not-implemented" className={styles.offersHeader}>
        <h4>Últimas promoções</h4>
        <p>Ver todas</p>
      </Link>
      <div>
        <Link to="/not-implemented" className={styles.offersHeader}>
          <img src={productDemonstration} alt="outros produtos" />
        </Link>
      </div>
    </div>
  )
}
