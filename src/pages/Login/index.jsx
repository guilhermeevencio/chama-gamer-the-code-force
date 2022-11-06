import { Link, useNavigate } from 'react-router-dom'
import style from './style.module.css'
import google from '../../assets/images/google_icon.png'
import facebook from '../../assets/images/facebook_icon.png'
import apple from '../../assets/images/apple_icon.png'

export function Login() {
    const navigate = useNavigate();
    return (
      <>
        <div className={style.header}>
          <h2>Bem vindo(a) de Volta.</h2>
          <p>Que bom te ver novamente, jogador! Use suas credenciais para acessar a sua melhor carteira.</p>
        </div>
        <div className={style.socialButton}>
          <button>
            <img src={google} alt="Google icon"/>
            Fazer login com google
          </button>
          <button>
            <img src={facebook} alt="Facebook icon" />
            Fazer login com Facebook
          </button>
          <button>
            <img src={apple} alt="Apple icon" />
            Fazer login com Apple
          </button>
        </div>
        <fieldset>
          <legend>Ou insira o E-mail</legend>
        </fieldset>
        <form>
          <div className={style.inputs}>
            <label htmlFor="email">
              <input type="email" name="email" id="email" placeholder='unidosdocafe@email.com'/>
            </label>
            <label htmlFor="password">
              <input type="password" name="password" id="password" placeholder='Senha'/>
            </label>
          </div>
          <div className={style.checkbox}>
            <div>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span>Lembrar</span>
            </div>
            <Link to="/remember">Esqueci a senha</Link>
          </div>
          <button type="submit" onClick={ () => navigate('/home') }>Entrar</button>
        </form>
        <div className={style.forget}>
          <span>Não possui conta?</span>
          <Link to="/register">Cadastre-se já</Link>
        </div>
      </>
    )
}
