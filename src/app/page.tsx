"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieProps } from "@/app/utils/types/movie";
import { Container } from "./components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [series, setSeries] = useState<MovieProps[]>([]);
  const [loadingMovies, setLoadingMovies] = useState<boolean>(true);
  const [loadingSeries, setLoadingSeries] = useState<boolean>(true);
  const [errorMovies, setErrorMovies] = useState<string | null>(null);
  const [errorSeries, setErrorSeries] = useState<string | null>(null);

  // Função para buscar filmes
  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`
      );
      setMovies(response.data.results);
    } catch (error) {
      setErrorMovies("Erro ao buscar os filmes");
    } finally {
      setLoadingMovies(false);
    }
  };

  // Função para buscar séries
  const getSeries = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`
      );
      setSeries(response.data.results);
    } catch (error) {
      setErrorSeries("Erro ao buscar as séries");
    } finally {
      setLoadingSeries(false);
    }
  };

  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  return (
    <main className="px-5 py-10 min-h-screen">
      <Container>
        {/* Seção de Filmes */}
        <div className="mb-10">
          <h1 className="text-3xl text-white my-10 uppercase font-semibold">
            🍿 Filmes em alta
          </h1>
          {loadingMovies ? (
            <p className="text-white text-center">Carregando filmes...</p>
          ) : errorMovies ? (
            <p className="text-red-500 text-center">{errorMovies}</p>
          ) : (
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              navigation={{
                disabledClass: "swiper-button-disabled",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  navigation: false,
                },
                640: {
                  slidesPerView: 2,
                  navigation: false,
                },
                768: {
                  slidesPerView: 3,
                  navigation: true,
                },
                1024: {
                  slidesPerView: 4,
                  navigation: true,
                },
              }}
            >
              {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <Link href={`movie/${movie.id}`}>
                    <div className="rounded-lg text-center">
                      <div className="group overflow-hidden rounded-lg">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="w-full h-auto rounded-t-lg group-hover:scale-110 duration-300 transition-all"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-base text-white font-semibold truncate">
                          {movie.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Seção de Séries */}
        <div className="mb-10">
          <h1 className="text-3xl text-white my-10 uppercase font-semibold">
            📺 Séries em alta
          </h1>
          {loadingSeries ? (
            <p className="text-white text-center">Carregando séries...</p>
          ) : errorSeries ? (
            <p className="text-red-500 text-center">{errorSeries}</p>
          ) : (
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              navigation={{
                disabledClass: "swiper-button-disabled",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  navigation: false,
                },
                640: {
                  slidesPerView: 2,
                  navigation: false,
                },
                768: {
                  slidesPerView: 3,
                  navigation: true,
                },
                1024: {
                  slidesPerView: 4,
                  navigation: true,
                },
              }}
            >
              {series.map((serie) => (
                <SwiperSlide key={serie.id}>
                  <Link href={`series/${serie.id}`}>
                    <div className="rounded-lg text-center">
                      <div className="group overflow-hidden rounded-lg">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                          alt={serie.name}
                          className="w-full h-auto rounded-t-lg group-hover:scale-110 duration-300 transition-all"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-base text-white font-semibold truncate">
                          {serie.name}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Container>
    </main>
  );
}
