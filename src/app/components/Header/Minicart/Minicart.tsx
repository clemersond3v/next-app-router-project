import { BsFillCartFill } from "react-icons/bs";
import styles from './Minicart.module.scss';

const Minicart: React.FC = () => {
    return (
        <div className={styles["minicartBtn"]}>
            <BsFillCartFill size={25} color="#001e62" />
        </div>
        
    );
}

export default Minicart;