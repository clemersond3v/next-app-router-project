const Newsletter: React.FC = () => {
    return (
        <div className="w-[274px] flex flex-col items-center p-4 gap-4 bg-white rounded-lg mb-5">
            <p className="text-foreground font-bold">Receba nossas novidades</p>

            <p className="text-foreground text-center text-sm">Seja o primeiro a saber sobre novos produtos, eventos exclusivos e ofertas online.</p>

            <button className="w-full h-10 bg-bgbluemedium rounded-lg font-bold">CADASTRE SEU E-MAIL</button>
        </div>
    );
}

export default Newsletter;