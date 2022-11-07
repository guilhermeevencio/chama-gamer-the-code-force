import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import checkedArt from '../../assets/checked-art.svg'
import orderDetailsFinnished from '../../assets/order-details-finnished.svg'

export function OrderFinnished() {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.headerContainer}>
        <Link className={styles.backLink} to="/shopping">
          Voltar
        </Link>
        <p>Confirmar compra</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={checkedArt} alt="compra efetuada com suceso" />
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={orderDetailsFinnished} alt="detalhes da compra" />
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={styles.goToHomeButton}
          onClick={() => navigate('/home')}
        >
          Voltar para a Home
        </button>
      </div>
    </div>
  )
}
