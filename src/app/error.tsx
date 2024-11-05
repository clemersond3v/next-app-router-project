"use client"

import Link from 'next/link'

const ErrorPage = ({ error }: { error: Error }) => {
    return (
        <div>
            <h1>Erro: {error.message}</h1>
            <Link href="/">Voltar para a página inicial</Link>
        </div>
    );
};

export default ErrorPage;