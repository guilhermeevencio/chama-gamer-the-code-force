import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import orderDetails from '../../assets/order-details.svg'
import orderFinnish from '../../assets/order-finnish.svg'
import passwordInput from '../../assets/password-input.svg'

export function Checkout() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Link className={styles.backLink} to="/shopping">
          Voltar
        </Link>
        <p>Confirmar compra</p>
      </div>
      <div className={styles.detailsContainer}>
        <p>Por favor, confirme sua compra</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={orderDetails} alt="detalhes da compra" />
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={orderFinnish} alt="resumo da compra" />
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <img src={passwordInput} alt="imput de senha" />
      </div>
      <div>
        <p className={styles.terms}>
          Clicando em ‘Confirmar compra’, você concorda com os nossos Termos de
          uso e Política de privacidade
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.finnishOrderButton}>Confirmar compra</button>
      </div>
    </div>
  )
}
