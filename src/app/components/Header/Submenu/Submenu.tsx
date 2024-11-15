import Link from "next/link";
import styles from './Submenu.module.scss';

const Submenu: React.FC = () => {
    return (
        <div className={styles['submenu']}>
            <ul className={styles['submenu--list']}>
                <li className={styles['submenu--list-item']}>
                    <Link href={"/feminino"}>Pesquisas ASICS</Link>
                </li>
                <li className={styles['submenu--list-item']}>
                    <Link href={"/masculino"}>Sites Oficiais ASICS</Link>
                </li>
                <li className={styles['submenu--list-item']}>
                    <Link href={"/esportes"}>Sustentabilidade</Link>
                </li>
                <li className={styles['submenu--list-item']}>
                    <Link href={"/infantil"}>Nossas Lojas</Link>
                </li>
                <li className={styles['submenu--list-item']}>
                    <Link href={"/lancamentos"}>Blog</Link>
                </li>
            </ul>
        </div>
        
    );
}

export default Submenu;