import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex bg-black h-24 mt-12  flex-col justify-center items-center mx-auto gap-2 ">
      <Link
        href="/"
        className="uppercase tracking-wider text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700"
      >
        CineVerse
      </Link>
      <p className="text-sm text-slate-300 my-1">Desenvolvido por MF - 2024. Todos os direitos reservados.</p>
    </footer>
  );
}
