import Link from 'next/link';
import TopBar from './TopBar/TopBar';
import SearchBar from './SearchBar/SearchBar';
import MyAccount from './MyAccount/MyAccount';
import Menu from './Menu/Menu';
import Minicart from './Minicart/Minicart';
import AlertNotifications from './AlertNotifications/AlertNotifications';

const Header: React.FC = () => {
    return(
        <header className="shadow-custom sticky z-10">
            <TopBar />

            <div className="flex max-w-container justify-between items-center m-auto py-2 mx-4 xl:mx-auto">
                <div>
                    <Link href={"/"} aria-label="Ir para a página inicial">
                        <svg className="tag__logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="111" height="42" viewBox="0 0 111 42"><defs><path id="l7awa" d="M416 53.07h36V91h-36z"></path><path id="l7awc" d="M444.56 53.07c-6.1 0-12.82 3.84-17.04 7.47l.34.5c6.54-4.72 15.63-7.79 18.14-3.19 1.32 2.43-.92 7.33-4.09 11.2.76-1.7.26-5-4.15-5-7.33 0-21.76 9.98-21.76 20.19 0 4.1 2.76 6.76 7.3 6.76C435.5 91 452 70.5 452 60.2c0-3.64-2.04-7.13-7.44-7.13m-17.08 26.9c-2.11 0-3.12-1.66-2.6-3.59 1.1-3.99 8.11-9.9 12.9-9.9 3.48 0 3.21 3.2 1.17 5.94l-1.13 1.28c-4.05 4.09-7.8 6.27-10.34 6.27"></path><path id="l7awd" d="M471.63 63.93a5.64 5.64 0 0 0-4.2-2.04h-7.07l-1.2 4.6h6.66l.64.08s.62.07.95.54c.28.39.31.97.12 1.73l-.32 1.21h-4.2c-3.61 0-8.65 2.67-9.78 6.99a5.99 5.99 0 0 0 1.02 5.38c1.08 1.36 3.1 2.1 5.3 2.1h8.84l2.32-8.9 1.7-6.56c.68-2.58-.05-4.21-.78-5.13zm-11.18 15.99c-.7 0-1.3-.25-1.66-.71a2.14 2.14 0 0 1-.31-1.88 3.9 3.9 0 0 1 3.66-2.74h3.9l-1.4 5.33z"></path><path id="l7awe" d="M520.59 61.89c-1.89 0-3.64.58-5.07 1.69a7.34 7.34 0 0 0-2.71 4.29c-1.03 4 1.98 5.92 4.4 7.29 1.74.98 3.24 1.82 2.92 3.08-.23.9-.61 1.68-2.75 1.68h-6.52l-1.18 4.6h7.22c1.93 0 3.72-.41 5.16-1.56 1.44-1.16 2.25-2.77 2.76-4.73a5.37 5.37 0 0 0-1-5c-.96-1.1-2.35-1.89-3.57-2.57-1.56-.88-3.03-1.7-2.78-2.71.16-.6.74-1.45 2-1.45h6.34l1.19-4.61z"></path><path id="l7awf" d="M481.23 61.89c-1.89 0-3.64.58-5.07 1.69a7.35 7.35 0 0 0-2.71 4.29c-1.03 4 1.98 5.92 4.4 7.29 1.74.98 3.24 1.82 2.92 3.08-.23.9-.6 1.68-2.75 1.68h-6.52l-1.18 4.6h7.22c1.93 0 3.72-.41 5.16-1.56 1.44-1.16 2.26-2.77 2.76-4.73a5.37 5.37 0 0 0-1-5c-.96-1.1-2.35-1.89-3.57-2.57-1.56-.88-3.03-1.7-2.77-2.71.15-.6.73-1.45 2-1.45h6.33l1.19-4.61z"></path><path id="l7awg" d="M492.04 61.89l-5.98 22.64h5.05l5.97-22.64z"></path><path id="l7awh" d="M509.88 61.89c-8.71.03-13.27 5.88-14.72 11.32-1.71 6.45 1.7 11.32 7.94 11.32h4.18l1.22-4.6h-4.18c-2.33 0-5.54-1.86-4.25-6.72a9.28 9.28 0 0 1 8.88-6.71h2.65l1.23-4.61z"></path><clipPath id="l7awb"><use xlinkHref="#l7awa"></use></clipPath></defs><g><g transform="translate(-416 -53)"><g><g></g><g clipPath="url(#l7awb)"><use fill="#001e62" xlinkHref="#l7awc"></use></g></g><g><use fill="#001e62" xlinkHref="#l7awd"></use></g><g><use fill="#001e62" xlinkHref="#l7awe"></use></g><g><use fill="#001e62" xlinkHref="#l7awf"></use></g><g><use fill="#001e62" xlinkHref="#l7awg"></use></g><g><use fill="#001e62" xlinkHref="#l7awh"></use></g></g></g></svg>
                    </Link>
                </div>

                <div className="hidden">
                    <SearchBar />
                </div>

                

                <div className="flex items-center gap-4">                    
                    <MyAccount />
                    <AlertNotifications />
                    <Minicart />                    
                </div>
            </div>

            <div>
                <SearchBar />
            </div>

            <Menu />
        </header>
    );
}

export default Header;