import styles from './FooterMenu.module.scss';

const FooterMenu: React.FC = () => {
    return (
        <div className={styles["footer-menu--container"]}>            
            <div className={styles["categories-col"]}>
                <div className={styles["categories"]}>
                    <h3 className={styles["footer-menu--title"]}>Masculino</h3>
                    <a className={styles["footer-menu--link"]} href="/calcados?filtro_39=Masculino">Calçados</a>
                    <a className={styles["footer-menu--link"]} href="/Vestuario?filtro_39=Masculino">Vestuários</a>
                    <a className={styles["footer-menu--link"]} href="/acessorios">Acessórios</a>
                    <a className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_39=Masculino">Ver tudo</a>
                </div>
                <div className={styles["categories"]}>
                    <h3 className={styles["footer-menu--title"]}>Feminino</h3>
                    <a className={styles["footer-menu--link"]} href="/calcados?filtro_39=Feminino">Calçados</a>
                    <a className={styles["footer-menu--link"]} href="/Vestuario?filtro_39=Feminino">Vestuários</a>
                    <a className={styles["footer-menu--link"]} href="/acessorios">Acessórios</a>
                    <a className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_39=Feminino">Ver tudo</a>
                </div>
            </div>
            <div className={styles["categories-col"]}>
                <div className={styles["categories esportes closed"]}>
                    <h3 className={styles["footer-menu--title"]}>Esportes</h3>
                    <a className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Academia">Academia</a>
                    <a className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Corrida">Corrida</a>
                    <a className={styles["footer-menu--link"]} href="/lista/todos-produtos?filtro_40=Tennis">Tennis</a>
                    <a className={styles["footer-menu--link"]} href="/calcados/trilha">Trilha</a>
                    <a className={styles["footer-menu--link"]} href="/calcados/volei">Vôlei</a>
                </div>
                <div className={styles["categories-group"]}>
                    <div className={styles["categories infantil closed"]}>
                    <a href="/calcados/infantil" className={styles["footer-menu--link--title"]}>Infantil</a>
                    </div>
                    <div className={styles["categories lancamentos closed"]}>
                    <a href="/lista/lancamentos" className={styles["footer-menu--link--title"]}>Lançamentos</a>
                    </div>
                    <div className={styles["categories outlet closed"]}>
                    <a href="/lista/outlet" className={styles["footer-menu--link--title"]}>Outlet</a>
                    </div>
                    <div className={styles["categories asics-back closed"]}>
                    <a href="/asics-back" className={styles["footer-menu--link--title"]}>Asics BACK</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterMenu;