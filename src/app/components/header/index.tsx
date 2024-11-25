import Link from "next/link";
export function Header() {
  return (
    <header className=" h-20 bg-black">
      <div className="flex justify-evenly items-center h-full ">
        <Link
          href="/"
          className="uppercase tracking-wider text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700"
        >
          CineVerse
        </Link>

        <nav className="flex gap-6">
          <Link
            href="/"
            className="font-semibold text-lg text-blue-500 hover:text-purple-600 transition-all duration-300"
          >
            Filmes
          </Link>
          <Link
            href="/tv"
            className="font-semibold text-lg text-blue-500  hover:text-purple-600 transition-all duration-300"
          >
            Series
          </Link>
        </nav>
      </div>
    </header>
  );
}
