import SEOContent from './SEOContent/SEOContent';
import Newsletter from './MidContent/Newsletter/Newsletter';
import SocialMedia from './MidContent/SocialMedia/SocialMedia';
import FooterMenu from './MidContent/FooterMenu/FooterMenu';
import PaymentMethods from './MidContent/PaymentMethods/PaymentMethods';
import Copyright from './Copyright/Copyright';

const Footer: React.FC = () => {
    return(
        <footer className="mt-24">
            <SEOContent />      
            <div className="bg-foreground text-white">
                <div className="max-w-container flex flex-col items-center mx-auto p-[35px_50px] gap-7 xl:flex-row xl:justify-between xl:items-start">
                    <div>
                        <Newsletter />
                        <SocialMedia />
                    </div>

                    <div>
                        <FooterMenu />
                    </div>

                    <div>
                        <PaymentMethods />
                    </div>
                </div>                
            </div>  
            <Copyright />
        </footer>
    );
}

export default Footer;