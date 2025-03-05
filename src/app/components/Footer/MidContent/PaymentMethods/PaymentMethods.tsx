import Image from "next/image"
import styles from "./PaymentMethods.module.scss"

const PaymentMethods: React.FC = () => {
    return (
        <div>
            <div className={styles["payment-methods"]}>
                <h3 className={styles["payment-methods__title"]}>Formas de pagamento</h3>
                <ul className={styles["payment-methods__list"]}>
                    <li className={styles["payment-methods__list__item"]}>
                        <Image alt="Visa" title="Visa" src="/new-footer-visa-icon.png" className="payment-methods__list__item__image" width={46} height={15} loading="lazy" />
                    </li>
                    <li className={styles["payment-methods__list__item"]}>
                        <Image alt="Mastercard" title="Mastercard" src="/new-footer-mastercard-icon.png" className="payment-methods__list__item__image" width={32} height={20} loading="lazy" />
                    </li>
                    <li className={styles["payment-methods__list__item"]}>
                        <Image alt="American Express" title="American Express" src="/new-footer-american-icon.png" className="payment-methods__list__item__image" width={28} height={20} loading="lazy" />
                    </li>
                    <li className={styles["payment-methods__list__item"]}>
                        <Image alt="elo" title="Elo" src="/new-footer-elo-icon.png" className="payment-methods__list__item__image" width={20} height={20} loading="lazy" />
                    </li>
                    <li className={styles["payment-methods__list__item"]}>
                        <Image alt="pix" title="Pix" src="/new-footer-pix-icon.png" className="payment-methods__list__item__image" width={20} height={20} loading="lazy" />    
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PaymentMethods;