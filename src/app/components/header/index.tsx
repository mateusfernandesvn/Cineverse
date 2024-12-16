import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

export function Header() {
  return (
    <header className="h-20 bg-black w-full">
      <div className="flex justify-around items-center h-full">
      <Link
        href="/"
        className="uppercase tracking-wider text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700 hover:text-white transition duration-300"
      >
        CineVerse
      </Link>
        <nav className="flex items-center gap-4">
          <FaHeart size={25} title="Fvoritos" />
          <Link href="/profile">
            <CgProfile size={30} title="meu perfil" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
