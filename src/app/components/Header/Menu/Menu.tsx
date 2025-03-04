import Link from "next/link";
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
    return (
        <ul className={styles['menu-departments']}>
            <li className={styles['menu-departments--item']}>
                <Link href={"/auto-ajuda"}>Auto Ajuda</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/aventura"}>Aventura</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/romance"}>Romance</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/terror"}>Terror</Link>
            </li>
        </ul>
    );
}

export default Menu;