import styles from "../styles/DestinationCard.module.css";

function DestinationCard({ title, subtitle, description, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>{title.charAt(0)}</div>
        )}
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
