import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import ApolloProviderWrapper from "./components/ApolloProviderWrapper";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Defina os pesos que deseja
  variable: "--font-roboto", // Variável CSS opcional
});

// ✅ Agora podemos exportar `metadata` pois `layout.tsx` é um Server Component
export const metadata: Metadata = {
  title: "Book Verso - Clemerson Costa",
  description: "Esse é um projeto de estudo criado pelo desenvolvedor baiano Clemerson Costa com o intuito de desbravar o NextJS e praticar outras ferramentas de front-end.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={roboto.variable}>
      <body>
        <Header />
        <ApolloProviderWrapper>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ApolloProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
