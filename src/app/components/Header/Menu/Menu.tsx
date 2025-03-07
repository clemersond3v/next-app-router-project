import Link from "next/link";

const Menu: React.FC = () => {
    return (
        <ul className="max-w-container flex items-center justify-center h-12 ms:gap-4 mx-4 xs:gap-2 xl:mx-auto">
            <li className="font-medium">
                <Link className="xl:hover:underline" href={"/auto-ajuda"}>Auto Ajuda</Link>
            </li>
            <li className="font-medium">
                <Link className="xl:hover:underline" href={"/aventura"}>Aventura</Link>
            </li>
            <li className="font-medium">
                <Link className="xl:hover:underline" href={"/romance"}>Romance</Link>
            </li>
            <li className="font-medium">
                <Link className="xl:hover:underline" href={"/terror"}>Terror</Link>
            </li>
        </ul>
    );
}

export default Menu;