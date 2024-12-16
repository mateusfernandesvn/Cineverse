import { Container } from "@/app/components/container";
import { MovieProps } from "@/app/utils/types/movie";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";


async function getMovie(id: string): Promise<MovieProps | null> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
    );
    if (!res.ok) throw new Error("Erro ao buscar dados do filme.");
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    return null;
  }
}

export default async function Movie(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const movie = await getMovie(id);

  if (!movie) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center">
        <Container>
          <h1 className="text-3xl text-center text-white">
            Não foi possível carregar as informações do filme. 😔
          </h1>
          <Link href="/" className="text-blue-500 mt-4 text-center block">
            Voltar à página inicial
          </Link>
        </Container>
      </main>
    );
  }

  const runtimeFormatted = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "Duração não disponível";

  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Data de lançamento não disponível";

  return (
    <main className="w-full min-h-screen">
      <Container>
        <Link href="/">
          <FaArrowLeftLong
            size={30}
            className="mt-6 w-10 text-white rounded-lg"
          />
        </Link>
        <div className="flex flex-col gap-4 mx-auto w-full max-w-3xl items-center justify-center min-h-screen">
          <div className="flex relative mt-4 w-96 h-96 max-sm:h-80 max-sm:w-64">
            <Image
              className="rounded-lg hover:opacity-70 transition-all duration-300"
              src={`https://image.tmdb.org/t/p/w500/${
                movie.poster_path || "default-image.jpg"
              }`}
              alt={movie.title || "Imagem não disponível"}
              priority={true}
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            />
          </div>

          <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-center">
              {movie.title || "Título não disponível"}
            </h1>
            <div className="flex gap-4 text-center justify-center">
              <p className="text-gray-300">{runtimeFormatted}</p>
              <p className="text-gray-300">
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
              <p className="text-gray-300">{movie.overview || "Sinopse não disponível."}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-2 ">Data de Lançamento</h2>
              <p className="text-gray-300">{releaseDate}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-2">Avaliação</h2>
              <p className="flex items-center gap-2 text-lg text-yellow-300 mt-2 text-center">
                <IoIosStar color="yellow" />
                {movie.vote_average
                  ? movie.vote_average.toFixed(1)
                  : "Avaliação não disponível"}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
