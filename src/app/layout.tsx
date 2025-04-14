"use client";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";
import Loading from "./loading";
// import ApolloProviderWrapper from "./components/ApolloProviderWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Seo from './components/SEO/Seo';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Defina os pesos que deseja
  variable: "--font-roboto", // Variável CSS opcional
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <html lang="pt" className={roboto.variable}>
      <Seo title="Minha Loja | Produtos de Qualidade" description="Encontre os melhores produtos com os melhores preços!" />
      <body>        
        <QueryClientProvider client={queryClient}>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </QueryClientProvider>        
      </body>
    </html>
  );
}
