import { Container } from "./components/container";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main className="w-full min-h-screen ">
      <Container>
        <h1 className="text-4xl font-bold my-12 -tracking-tighter text-center uppercase">
        🍿 Filmes Populares 
        </h1>
          <Card />
      </Container>
    </main>
  );
}
