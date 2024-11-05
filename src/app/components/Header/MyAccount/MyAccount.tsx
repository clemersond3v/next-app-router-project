import styles from './MyAccount.module.scss';

const MyAccount: React.FC = () => {
    return (
        <button className={styles["myAccount"]}>
            <svg fill="#001e62" className="icon__user-header" width="32" height="32" viewBox="0 0 32 32">
                <path d="M15.9998 29.3332C23.3636 29.3332 29.3332 23.3636 29.3332 15.9998C29.3332 8.63604 23.3636 2.6665 15.9998 2.6665C8.63604 2.6665 2.6665 8.63604 2.6665 15.9998C2.6665 23.3636 8.63604 29.3332 15.9998 29.3332Z" fill="white" stroke="#001E62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M24 26.6665C24 24.5448 23.1571 22.5099 21.6569 21.0096C20.1566 19.5094 18.1217 18.6665 16 18.6665C13.8783 18.6665 11.8434 19.5094 10.3431 21.0096C8.84286 22.5099 8 24.5448 8 26.6665" stroke="#001E62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.9998 18.6667C18.9454 18.6667 21.3332 16.2789 21.3332 13.3333C21.3332 10.3878 18.9454 8 15.9998 8C13.0543 8 10.6665 10.3878 10.6665 13.3333C10.6665 16.2789 13.0543 18.6667 15.9998 18.6667Z" stroke="#001E62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>

            <p>Ingressar</p>

            <svg fill="#B7B9DE" className={styles['icon__arrow-header']} xmlns="http://www.w3.org/2000/svg" data-name="Camada 1" viewBox="0 0 30 51.51">
                <defs></defs>
                <polygon fill="#B7B9DE" points="4.17 51.51 0 47.34 21.66 25.68 0.15 4.17 4.32 0 30 25.68 4.17 51.51"></polygon>
            </svg>
        </button>
    );
}

export default MyAccount;