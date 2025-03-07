"use client"

import { PiUserCircleLight } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

const MyAccount: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth <= 1440);
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);
    
    return (
        <button className="flex items-center gap-1 xl:border-[1px] xl:border-bglight500 xl:rounded-md xl:p-1" name="Botão de minha conta" aria-label="Botão de minha conta">
            <PiUserCircleLight size={30} color="#001e62" />

            {!isMobile && (
                <>
                    <p className="text-sm">Entrar</p>
                    <MdKeyboardArrowRight className="" size={25} color="#B7B9DE" />
                </>                
            )}            
        </button>
    );
}

export default MyAccount;