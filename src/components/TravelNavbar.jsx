import { NavLink } from "react-router-dom";
import styles from "../styles/TravelNavbar.module.css";

function TravelNavbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>MundoTrip</div>

      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/destinos"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Destinos
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/pacotes"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Pacotes
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/sobre"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TravelNavbar;
