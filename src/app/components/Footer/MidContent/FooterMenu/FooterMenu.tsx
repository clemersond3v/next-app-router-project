import Link from 'next/link';

const FooterMenu: React.FC = () => {
    return (
        <div className="flex flex-col text-center">
            <h3 className="font-bold mb-3">Categories</h3>
            <Link className="py-1" href="/auto-ajuda">Auto Ajuda</Link>
            <Link className="py-1" href="/aventura">Aventura</Link>
            <Link className="py-1" href="/romance">Romance</Link>
            <Link className="py-1" href="/terror">Terror</Link>
        </div>        
    );
}

export default FooterMenu;