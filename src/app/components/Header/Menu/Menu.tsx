import Link from "next/link";
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
    return (
        <ul className={styles['menu-departments']}>
            <li className={styles['menu-departments--item']}>
                <Link href={"/feminino"}>Feminino</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/masculino"}>Masculino</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/esportes"}>Esportes</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/infantil"}>Infantil</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/lancamentos"}>Lançamentos</Link>
            </li>
            <li className={styles['menu-departments--item']}>
                <Link href={"/oneasics"}>OneASICS</Link>
            </li>
        </ul>
    );
}

export default Menu;