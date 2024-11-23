import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
    return (
        <div className={styles["footer-newsletter"]}>
            <p className={styles["footer-newsletter--title"]}>Receba nossas novidades</p>

            <p className={styles["footer-newsletter--subtitle"]}>Seja o primeiro a saber sobre novos produtos, eventos exclusivos e ofertas online.</p>

            <button className={styles["footer-newsletter--button"]}>CADASTRE SEU E-MAIL</button>
        </div>
    );
}

export default Newsletter;