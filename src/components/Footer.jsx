import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const actualYear = new Date().getFullYear();

    return (
    <footer className=" border-top p-5 mt-auto text-center">
      {/* Seccion de enlaces */}
      <ul className={styles.footerNav}>
          <li>
              <a href="/contacto" className={styles.footerLink}>Acerca de Nosotros</a>
          </li>
          <li className={styles.footerLink}>
            <Link to="/privacity">Política de Privacidad</Link>
          </li>
      </ul>
      {/* Seccion de Copyright */}
      <p className="mt-5 fs-6 text-center">
        © {actualYear}. SILICON Store Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;  