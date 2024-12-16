import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex bg-gray-950  mt-12 flex-col justify-center items-center mx-auto gap-3 px-6 py-4">
    <Link
        href="/"
        className="uppercase tracking-wider text-3xl font-extrabold text-white "
      >
        <span className="text-red-600">Cine</span>Verse
      </Link>
      
      {/* Redes Sociais - Ícones */}
      <div className="flex gap-6 mt-4">
        <Link href="https://www.instagram.com" className="text-slate-400 hover:text-white transition duration-300">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://www.twitter.com" className="text-slate-400 hover:text-white transition duration-300">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://www.facebook.com" className="text-slate-400 hover:text-white transition duration-300">
          <FaFacebook size={24} />
        </Link>
      </div>

      {/* Direitos Autorais */}
      <p className="text-sm text-center text-slate-400 mt-2">Desenvolvido por MF - 2024. Todos os direitos reservados.</p>
    </footer>
  );
}
