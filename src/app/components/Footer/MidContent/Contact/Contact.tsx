import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={styles["contact"]}>
      <h3 className={styles["contact__title"]}>Contato</h3>
      <a className={styles["contact__link"]} href="/ajuda/central-de-relacionamento">Atendimento por E-mail</a>
      <a className={styles["contact__link"]} href="/ajuda/central-de-relacionamento">Central de Relacionamento</a>
    </div>
  );
};

export default Contact;
