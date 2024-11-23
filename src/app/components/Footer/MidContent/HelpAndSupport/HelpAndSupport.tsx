import styles from "./HelpAndSupport.module.scss";

const HelpAndSupport: React.FC = () => {
  return (
    <div className={styles["help-and-support"]}>
      <h3 className={styles["help-and-support__title"]}>Ajuda e suporte</h3>
      <a className={styles["help-and-support__link"]} href="/ajuda/lojas">Encontre uma loja</a>
      <a className={styles["help-and-support__link"]} href="/ajuda/guia-medidas">Guia de Medidas</a>
      <a className={styles["help-and-support__link"]} href="/institucional#/regulamentos">Regulamentos</a>
      <a className={styles["help-and-support__link"]} href="/ajuda/central-de-relacionamento">Trocas e Devoluções</a>
    </div>
  );
};

export default HelpAndSupport;
