import styles from './SearchBar.module.scss';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar: React.FC = () => {
    return (
        <div className={styles["searchBar"]}>
            <input type="text" placeholder="Buscar em ASICS.com.br" className={styles["searchBar--input"]} />
            <button className={styles["searchBar--button"]}>
                <IoSearchOutline size={25} color="#001e62" />
            </button>
        </div>
    );
}

export default SearchBar;