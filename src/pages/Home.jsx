import styles from "../styles/Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>MundoTrip • Sua próxima viagem começa aqui</h1>
        <p>
          Explore destinos incríveis pelo mundo e descubra pacotes pensados
          para deixar sua viagem mais simples, segura e inesquecível.
        </p>
        <p className={styles.subtitle}>
          Use o menu para navegar entre destinos, pacotes e informações sobre o
          projeto desenvolvido em React.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Destinos</h2>
          <p>Conheça cidades e regiões muito procuradas por viajantes.</p>
        </div>
        <div className={styles.card}>
          <h2>Pacotes</h2>
          <p>Veja exemplos de pacotes com roteiros completos.</p>
        </div>
        <div className={styles.card}>
          <h2>Sobre</h2>
          <p>Entenda como o sistema foi construído com React e Vite.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
