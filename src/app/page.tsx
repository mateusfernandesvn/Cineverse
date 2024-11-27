"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieProps } from "@/app/utils/types/movie";
import { Card } from "@/app/components/card";
import { Container } from "./components/container";

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar os filmes:", error);
      }
    }

    getMovies();
  }, []);

  return (
    
    <main className="px-5 py-10 min-h-screen">
      <Container>
      <h1 className="text-4xl text-center font-bold text-white mb-5">Filmes em Cartaz</h1>
      <Card movies={movies} />
      </Container>
    </main>
  );
}
