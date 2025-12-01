import styles from "../styles/About.module.css";

function About() {
  return (
    <section className={styles.page}>
      <h2>Sobre o Projeto</h2>
      <p>
        Este sistema foi desenvolvido como atividade prática da disciplina de
        desenvolvimento web com React.
      </p>
      <p>
        A ideia é simular uma pequena aplicação de agência de viagens, usando:
      </p>
      <ul className={styles.list}>
        <li>Componentes reutilizáveis;</li>
        <li>Props para passar dados entre componentes;</li>
        <li>Rotas com <code>react-router-dom</code> (SPA);</li>
        <li>Organização de pastas por componentes, páginas e dados;</li>
        <li>Estilização com <strong>CSS Modules</strong>;</li>
        <li>Layout responsivo.</li>
      </ul>
      <p>
        Todo conteúdo é fictício e tem apenas finalidade acadêmica e de
        aprendizado.
      </p>
    </section>
  );
}

export default About;
