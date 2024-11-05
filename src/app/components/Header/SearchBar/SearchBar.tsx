import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
    return (
        <div className={styles["searchBar"]}>
            <input type="text" placeholder="Buscar em ASICS.com.br" className={styles["searchBar--input"]} />
            <button className={styles["searchBar--button"]}>
                <svg fill="#001e62" className="icon__searchBar-header" width="21px" height="21px" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,105.000000) scale(0.100000,-0.100000)" fill="#001E62" stroke="none">
                        <path d="M415 1039 c-165 -20 -288 -111 -364 -269 -31 -65 -36 -86 -39 -167 -7 -148 37 -261 139 -361 153 -150 396 -174 576 -58 l38 24 101 -99 c102 -100 133 -116 162 -87 32 32 14 61 -111 186 -83 82 -129 122 -144 122 -13 0 -46 -18 -75 -40 -193 -146 -459 -76 -560 146 -18 39 -22 68 -23 139 0 78 4 98 28 150 35 76 95 138 172 178 56 30 67 32 160 32 93 0 104 -2 160 -32 74 -38 138 -105 173 -181 24 -51 27 -68 27 -171 0 -125 7 -140 58 -127 33 8 47 53 47 151 0 206 -124 380 -316 443 -73 24 -131 30 -209 21z">
                        </path>
                        <path d="M326 411 c-26 -28 -16 -62 24 -85 47 -28 198 -30 247 -3 92 50 50 132 -47 93 -50 -20 -100 -20 -147 -1 -46 19 -56 19 -77 -4z">
                        </path>
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default SearchBar;