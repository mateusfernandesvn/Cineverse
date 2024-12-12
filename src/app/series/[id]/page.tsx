import { Container } from "@/app/components/container";
import { MovieProps } from "@/app/utils/types/movie";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

async function getSeries(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
  );
  const data = await res.json();
  return data;
}

export default async function series(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const movie: MovieProps = await getSeries(id);

  const first_air_date = movie.first_air_date
    ? new Date(movie.first_air_date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Data não disponível";

  return (
    <main className="w-full min-h-screen">
      <Container>
        <Link href="/">
          <FaArrowLeftLong
            size={30}
            className="mt-6 w-10 text-white rounded-lg"
          />
        </Link>
        <div className="flex flex-col gap-4 mx-auto w-full max-w-2xl items-center justify-center min-h-screen">
          <div className="flex relative mt-4 w-1/2 h-96 max-sm:h-80 max-sm:w-64">
            <Image
              className="rounded-lg hover:opacity-70 transition-all duration-300"
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path || "default-image.jpg"
              }`}
              alt={movie.title || movie.name || "Série"}
              priority={true}
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            />
          </div>

          <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-center">
              {movie.title || movie.name || "Título indisponível"}
            </h1>
            <div className="flex gap-4 text-center justify-center">
              <p>
                Temp:{" "}
                {movie.number_of_seasons ||
                  "Número de temporadas não disponível"}{" "}
              </p>
              <p>
                {movie.genres && movie.genres.length > 0
                  ? movie.genres.map((genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < movie.genres.length - 1 && ", "}
                      </span>
                    ))
                  : "Gêneros não disponíveis"}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-2">Sinopse</h2>
              <p>{movie.overview || "Sinopse não disponível."}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-2">Data de Lançamento</h2>
              <p>{first_air_date}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mt-2">Avaliação</h2>
              <p className="flex items-center gap-2 text-lg text-white mt-2 text-center">
                <IoIosStar color="yellow" />
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
