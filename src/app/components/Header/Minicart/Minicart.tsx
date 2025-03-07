import { BsFillCartFill } from "react-icons/bs";

const Minicart: React.FC = () => {
    return (
        <button name="Botão do carrinho" aria-label="Botão do carrinho">
            <BsFillCartFill size={25} color="#001e62" />
        </button>
    );
}

export default Minicart;