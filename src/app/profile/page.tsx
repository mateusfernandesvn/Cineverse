import { Container } from "../components/container";
import Image from "next/image";
import userImg from "../../../public/user.jpg";
import { FaShareAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Perfil",
  description: "Perfil do usuário",
};

export default function Profile() {
  return (
    <main className="w-full min-h-screen">
      <Container>
        <section className="mt-8 mb-6 bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg justify-center flex-col sm:flex-row  sm:justify-normal">
            <Image
              src={userImg}
              alt="perfil do usuário"
              className="rounded-full border-solid border-4 border-white w-56 h-56 object-cover"
            />
            <div className="flex flex-col  justify-center gap-2">
              <h1 className="text-2xl font-bold">Mateus Fernandes</h1>
              <p className="text-sm text-gray-300">mateusfernandesvn</p>
            </div>
          </div>

          <div className="sm:absolute top-6 right-6 gap-3 flex items-center justify-center mt-2">
            <button className="bg-white px-4  text-black py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Configuração
            </button>

            <button className="bg-white px-4  text-black py-3 rounded-lg hover:bg-gray-200 transition-all duration-300">
              <FaShareAlt size={24} />
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
}
