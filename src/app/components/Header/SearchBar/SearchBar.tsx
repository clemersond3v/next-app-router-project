import { IoSearchOutline } from "react-icons/io5";

const SearchBar: React.FC = () => {
    return (
        <div className="max-w-container flex items-center border-[1px] border-foreground rounded-md mx-4 px-2 h-8 xl:mx-auto">
            <input 
                type="text" 
                placeholder="Buscar em Bookverso.com.br" 
                className="w-full outline-none text-sm"
            />
            <button name='Botão de pesquisar' aria-label='Botão de pesquisar'>
                <IoSearchOutline size={25} color="#001e62" />
            </button>
        </div>
    );
}

export default SearchBar;