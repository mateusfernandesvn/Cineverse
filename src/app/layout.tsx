import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cineverse - Encontre seus filmes favoritos",
  description: "Encontre seus filmes favoritos com facilidade no Cineverse!",
  keywords: [
    "filmes",
    "cineverse",
    "streaming",
    "filmes online",
    "streaming de filmes",
    "filmes em alta",
    "filmes populares",
    "filmes recentes",
    "filmes de ação",
    "filmes de comédia",
    "filmes de drama",
    "filmes de romance",
    "filmes de terror",
    "filmes de ficção científica",
    "filmes de aventura",
    "filmes de suspense",
    "filmes de fantasia",
    "filmes de animação",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/icon.png" type="image/x-icon" />
      <body className="bg-gray-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
