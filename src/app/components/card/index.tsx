"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieProps } from "@/app/utils/types/movie";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

export function Card() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4a9b258d43542967020b11c33cd9dad0&language=pt-BR&page=1"
      );
      setMovies(response.data.results);
      // console.log(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar os filmes:", error);
    }
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <Link key={movie.id} href={`movie/${movie.id}`}>
          <section className="w-full flex flex-col justify-center items-center mb-5">
            <div className="relative w-full h-96">
              <Image
                className=" rounded-lg hover:opacity-70 transition-all duration-300"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                priority={true}
                fill={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
            <p className="text-lg text-white mt-2 text-center text-clip overflow-hidden">
              {movie.title}
            </p>
            <p className="flex items-center gap-1 text-sm text-white mt-2 text-center">
              <IoIosStar color="yellow"  />
              {movie.vote_average.toFixed(1)}
            </p>
          </section>
        </Link>
      ))}
    </div>
  );
}
