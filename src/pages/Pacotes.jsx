import DestinationCard from "../components/DestinationCard.jsx";
import pacotesData from "../data/pacotesData.js";
import styles from "../styles/Pacotes.module.css";

function Pacotes() {
  return (
    <section className={styles.page}>
      <h2>Pacotes de Viagem</h2>
      <p className={styles.intro}>
        Exemplos de pacotes com combinação de destinos, hospedagem e passeios.
      </p>

      <div className={styles.grid}>
        {pacotesData.map((pacote) => (
          <DestinationCard
            key={pacote.title}
            title={pacote.title}
            subtitle={pacote.subtitle}
            description={pacote.description}
            image={pacote.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Pacotes;
