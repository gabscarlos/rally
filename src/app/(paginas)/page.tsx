import Vantagem from "@/components/landing/Vantagem";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto space-y-20 mt-4">
      {/* Resultados em tempo real */}
      <Vantagem
        inverter
        imagem="/tabela.png"
        titulo="🏁 Resultados em Tempo Real"
        subtitulo="Acompanhe etapas concluídas com tempos por SS, médias e classificação geral."
      />

      {/* Classificações */}
      <Vantagem
        imagem="/ranking.png"
        titulo="📊 Classificações e Rankings"
        subtitulo="Veja a pontuação atualizada do campeonato e descubra quem lidera cada categoria."
      />

      {/* Jogos */}
      <Vantagem
        inverter
        imagem="/games.png"
        titulo="🎮 Jogos Oficiais"
        subtitulo="Richard Burns Rally e EA Sports WRC 24"
      />

      {/* Comunidade */}
      <Vantagem
        imagem="/logo-brc.png"
        titulo=" 👥 Grupo Brasil Rally Championship"
        subtitulo="Comunidade apaixonada por rally com eventos semanais e categorias
          realistas."
      />

      {/* Navegação extra */}
      <section className="text-center pt-10 border-t border-gray-700">
        <p className="text-lg text-amber-950 font-medium">
          Explore resultados, rankings, histórico e muito mais.
        </p>
        <Link href="/game">
          <button className="mt-4 bg-amber-800/80 text-white font-bold px-6 py-2 rounded-xl hover:bg-amber-800">
            Ver Resultados
          </button>
        </Link>
      </section>
    </main>
  );
}
