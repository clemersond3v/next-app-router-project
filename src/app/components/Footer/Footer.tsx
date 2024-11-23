import SEOContent from './SEOContent/SEOContent';
import styles from './Footer.module.scss';
import Newsletter from './MidContent/Newsletter/Newsletter';
import SocialMedia from './MidContent/SocialMedia/SocialMedia';
import FooterMenu from './MidContent/FooterMenu/FooterMenu';
import Institutional from './MidContent/Institutional/Institutional';
import HelpAndSupport from './MidContent/HelpAndSupport/HelpAndSupport';
import Contact from './MidContent/Contact/Contact';
import PaymentMethods from './MidContent/PaymentMethods/PaymentMethods';
import Copyright from './Copyright/Copyright';

const Footer: React.FC = () => {
    return(
        <footer className={styles['layout-footer']}>
            <SEOContent />      
            <div className={styles['layout-footer--middle']}>
                <div className={styles['layout-footer--middle__container']}>
                    <div className={styles['layout-footer--middle-left']}>
                        <Newsletter />
                        <SocialMedia />
                    </div>

                    <div className={styles['layout-footer--middle-menu']}>
                        <FooterMenu />
                        <Institutional />
                        <HelpAndSupport />
                    </div>

                    <div className={styles['layout-footer--middle-right']}>
                        <Contact />
                        <PaymentMethods />
                    </div>
                </div>                
            </div>  
            <Copyright />    
        </footer>
    );
}

export default Footer;