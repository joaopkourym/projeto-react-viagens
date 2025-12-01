import styles from "../styles/TravelFooter.module.css";

function TravelFooter() {
  return (
    <footer className={styles.footer}>
      <p>MundoTrip • Agência de Viagens</p>
      <p className={styles.small}>Projeto acadêmico desenvolvido em React</p>
    </footer>
  );
}

export default TravelFooter;
