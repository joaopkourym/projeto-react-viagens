import DestinationCard from "../components/DestinationCard.jsx";
import destinosData from "../data/destinosData.js";
import styles from "../styles/Destinos.module.css";

function Destinos() {
  return (
    <section className={styles.page}>
      <h2>Destinos em Destaque</h2>
      <p className={styles.intro}>
        Alguns dos destinos mais procurados por quem quer viajar pelo mundo.
      </p>

      <div className={styles.grid}>
        {destinosData.map((destino) => (
          <DestinationCard
            key={destino.title}
            title={destino.title}
            subtitle={destino.subtitle}
            description={destino.description}
            image={destino.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinos;
