import styles from './Institutional.module.scss';

const Institutional: React.FC = () => {
  return (
    <div className={styles["institutional"]}>
        <h3 className={styles["institutional__title"]}>Institucional</h3>
        <a className={styles["institutional__link"]} href="/institucional#/politica-de-privacidade">Política de Privacidade</a>
        <a className={styles["institutional__link"]} href="/institucional#/nossa-historia">Sobre a ASICS</a>
        <a className={styles["institutional__link"]} href="/institucional#/termos-de-uso">Termos de Uso</a>
        <a className={styles["institutional__link"]} href="https://www.linkedin.com/company/asics-latin-america/jobs/?viewAsMember=true" target="_blank">Trabalhe Conosco</a>
        <a className={styles["institutional__link"]} href="/institucional#/visao-geral-das-empresas-asics" target="_blank">Visão geral</a>
        <a className={styles["institutional__link"]} href="/pesquisas-asics">Pesquisas ASICS</a>
        <a className={styles["institutional__link"]} href="/institucional/sustentabilidade" target="_blank">Sustentabilidade</a>
        <a className={styles["institutional__link"]} href="/institucional#/relatorio-salarial-asics">Relatório de Transparência Salarial</a>
    </div>
  );
};

export default Institutional;
