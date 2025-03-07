import Link from "next/link";


const Copyright: React.FC = () => {
  return (
    <div>
      <div className="max-w-container mx-auto flex flex-col items-center justify-center text-center p-5 text-xs">
        <div>
          <p>
            © 2025 BookVerso. Todos os direitos reservados.  
            Proibida a reprodução total ou parcial sem autorização.  
            BookVerso - Sua próxima leitura começa aqui.
          </p>
        </div>
        <div>
          <p className="mt-4 font-bold">
            Powered by
          </p>
          <Link href={"https://www.linkedin.com/in/clemerson-costa-dev/"} target="_blank">Clemerson Costa - Software Engineer</Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
