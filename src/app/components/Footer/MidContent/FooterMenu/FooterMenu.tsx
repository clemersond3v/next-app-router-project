import styles from './FooterMenu.module.scss';
import Link from 'next/link';

const FooterMenu: React.FC = () => {
    return (
        <div className={styles["footer-menu--container"]}>            
            <div className={styles["categories-col"]}>
                <div className={styles["categories"]}>
                    <h3 className={styles["footer-menu--title"]}>Categories</h3>
                    <Link className={styles["footer-menu--link"]} href="/auto-ajuda">Auto Ajuda</Link>
                    <Link className={styles["footer-menu--link"]} href="/aventura">Aventura</Link>
                    <Link className={styles["footer-menu--link"]} href="/romance">Romance</Link>
                    <Link className={styles["footer-menu--link"]} href="/terror">Terror</Link>
                </div>
                {/* <div className={styles["categories"]}>
                    <h3 className={styles["footer-menu--title"]}>Feminino</h3>
                    <Link className={styles["footer-menu--link"]} href="/calcados?filtro_39=Feminino">Calçados</Link>
                    <Link className={styles["footer-menu--link"]} href="/Vestuario?filtro_39=Feminino">Vestuários</Link>
                    <Link className={styles["footer-menu--link"]} href="/acessorios">Acessórios</Link>
                    <Link className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_39=Feminino">Ver tudo</Link>
                </div> */}
            </div>
            {/* <div className={styles["categories-col"]}>
                <div className={styles["categories esportes closed"]}>
                    <h3 className={styles["footer-menu--title"]}>Esportes</h3>
                    <Link className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Academia">Academia</Link>
                    <Link className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Corrida">Corrida</Link>
                    <Link className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Tennis">Tennis</Link>
                    <Link className={styles["footer-menu--link"]} href="/calcados/trilha">Trilha</Link>
                    <Link className={styles["footer-menu--link"]} href="/calcados/volei">Vôlei</Link>
                </div>
                <div className={styles["categories-group"]}>
                    <div className={styles["categories infantil closed"]}>
                    <Link href="/calcados/infantil" className={styles["footer-menu--link--title"]}>Infantil</Link>
                    </div>
                    <div className={styles["categories lancamentos closed"]}>
                    <Link href="/lista/lancamentos" className={styles["footer-menu--link--title"]}>Lançamentos</Link>
                    </div>
                    <div className={styles["categories outlet closed"]}>
                    <Link href="/lista/outlet" className={styles["footer-menu--link--title"]}>Outlet</Link>
                    </div>
                    <div className={styles["categories asics-back closed"]}>
                    <Link href="/asics-back" className={styles["footer-menu--link--title"]}>Asics BACK</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default FooterMenu;