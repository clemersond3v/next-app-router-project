import styles from "./HelpAndSupport.module.scss";
import Link from 'next/link';

const HelpAndSupport: React.FC = () => {
  return (
    <div className={styles["help-and-support"]}>
      <h3 className={styles["help-and-support__title"]}>Ajuda e suporte</h3>
      <Link className={styles["help-and-support__link"]} href="/ajuda/lojas">Encontre uma loja</Link>
      <Link className={styles["help-and-support__link"]} href="/ajuda/guia-medidas">Guia de Medidas</Link>
      <Link className={styles["help-and-support__link"]} href="/institucional#/regulamentos">Regulamentos</Link>
      <Link className={styles["help-and-support__link"]} href="/ajuda/central-de-relacionamento">Trocas e Devoluções</Link>
    </div>
  );
};

export default HelpAndSupport;
