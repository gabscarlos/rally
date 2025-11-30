"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Trophy, Medal, Award, Sparkles, Crown, ArrowLeft } from "lucide-react";
import tabelaMc from "@/data/constants/WRC/brc/2025/montecarlo/tabelaMc";
import tabelaSweden from "@/data/constants/WRC/brc/2025/sweden/tabelaSweden";
import tabelaKenya from "@/data/constants/WRC/brc/2025/kenya/tabelaKenya";
import tabelaIberia from "@/data/constants/WRC/brc/2025/iberia/tabelaIberia";
import tabelaPortugal from "@/data/constants/WRC/brc/2025/portugal/tabelaPortugal";
import tabelaItalia from "@/data/constants/WRC/brc/2025/italia/tabelaItalia";
import tabelaGreece from "@/data/constants/WRC/brc/2025/greece/tabelaGreece";
import tabelaEstonia from "@/data/constants/WRC/brc/2025/estonia/tabelaEstonia";
import tabelaFinland from "@/data/constants/WRC/brc/2025/finland/tabelaFinland";
import tabelaPacifico from "@/data/constants/WRC/brc/2025/pacifico/tabelaPacifico";
import tabelaChile from "@/data/constants/WRC/brc/2025/chile/tabelaChile";
import tabelaCentralEurope from "@/data/constants/WRC/brc/2025/centraleurope/tabelaCentralEurope";

// Tipo para os dados das tabelas
interface RallyResult {
  DisplayName: string;
  PointsAccumulated: number;
  Rank?: number;
}

// Função para somar pontos de múltiplas tabelas e ordenar
const calculateChampionshipStandings = (
  tables: RallyResult[][]
): RallyResult[] => {
  const pointsMap = new Map<string, number>();

  tables.forEach((table) => {
    table.forEach((result) => {
      const currentPoints = pointsMap.get(result.DisplayName) || 0;
      pointsMap.set(
        result.DisplayName,
        currentPoints + result.PointsAccumulated
      );
    });
  });

  const sortedResults: RallyResult[] = Array.from(pointsMap.entries())
    .map(([displayName, points]) => ({
      DisplayName: displayName,
      PointsAccumulated: points,
    }))
    .sort((a, b) => b.PointsAccumulated - a.PointsAccumulated)
    .map((result, index) => ({
      ...result,
      Rank: index + 1,
    }));

  return sortedResults;
};

const ChampionsPodiumPage = () => {
  const championshipStandings = useMemo(() => {
    return calculateChampionshipStandings([
      tabelaMc,
      tabelaSweden,
      tabelaKenya,
      tabelaIberia,
      tabelaPortugal,
      tabelaItalia,
      tabelaGreece,
      tabelaEstonia,
      tabelaFinland,
      tabelaPacifico,
      tabelaChile,
      tabelaCentralEurope,
    ]);
  }, []);

  const topThree = championshipStandings.slice(0, 3);
  const [first, second, third] = topThree;

  // Animação de confete
  const Confetti = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#facc15", "#f59e0b", "#ef4444", "#3b82f6"][
              Math.floor(Math.random() * 4)
            ],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200/20 via-amber-300/20 to-amber-200/20 p-4 py-12">
      {/* Confete de fundo */}
      <Confetti />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Botão Voltar */}
        <Link
          href="/game/WRC/brc/championship/2025"
          className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-amber-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8 font-semibold border border-amber-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Campeonato
        </Link>

        {/* Header Principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Crown className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              CAMPEÕES 2025
            </h1>
            <Crown
              className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
          <p className="text-amber-900 text-xl md:text-2xl font-bold mb-2">
            Brasil Rally Championship
          </p>
          <p className="text-amber-800 text-lg">
            Os melhores pilotos da temporada
          </p>
        </div>

        {/* Pódio Container */}
        <div className="relative w-full mb-12">
          {/* Background com efeito de luz */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-amber-200/30 to-transparent rounded-3xl blur-xl" />

          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200/50 p-6 md:p-12 pt-8 md:pt-16 pb-8 md:pb-12">
            {/* Pódio */}
            <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 mb-8 px-2">
              {/* 2º Lugar */}
              {second && (
                <div
                  className="flex flex-col items-center animate-slideUp flex-1 max-w-[140px] sm:max-w-[160px] md:max-w-[200px]"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="relative mb-3 md:mb-4 group">
                    <div className="absolute inset-0 bg-gray-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center border-2 md:border-4 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                        {second.DisplayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-white rounded-full p-1 md:p-2 shadow-lg">
                      <Medal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gray-500" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl w-full h-32 sm:h-36 md:h-44 lg:h-48 flex flex-col items-center justify-start pt-3 md:pt-4 shadow-xl border-t-2 md:border-t-4 border-white">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-md mb-1 md:mb-2">
                      2º
                    </span>
                    <div className="text-center px-1 sm:px-2">
                      <p className="font-bold text-white text-xs sm:text-sm md:text-base lg:text-lg mb-1 truncate max-w-full">
                        {second.DisplayName}
                      </p>
                      <p className="text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold mt-1 md:mt-2">
                        {second.PointsAccumulated} pts
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 1º Lugar */}
              {first && (
                <div className="flex flex-col items-center animate-slideUp z-10 flex-1 max-w-[160px] sm:max-w-[180px] md:max-w-[240px]">
                  <div className="relative mb-3 md:mb-4 group">
                    <div className="absolute inset-0 bg-yellow-400/50 rounded-full blur-2xl animate-pulse" />
                    <Sparkles className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-yellow-400 animate-spin-slow" />
                    <Sparkles
                      className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-yellow-400 animate-spin-slow"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <Sparkles
                      className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-yellow-400 animate-spin-slow"
                      style={{ animationDelay: "1s" }}
                    />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 flex items-center justify-center border-3 sm:border-4 md:border-6 lg:border-8 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                      <span className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
                        {first.DisplayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-white rounded-full p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-xl animate-bounce">
                      <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-yellow-400 via-amber-400 to-amber-500 rounded-t-2xl w-full h-44 sm:h-48 md:h-64 lg:h-72 flex flex-col items-center justify-start pt-4 sm:pt-5 md:pt-6 shadow-2xl border-t-3 sm:border-t-4 md:border-t-6 lg:border-t-8 border-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 animate-shimmer" />
                    <span className="text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-white drop-shadow-xl mb-2 sm:mb-2 md:mb-3 relative z-10">
                      1º
                    </span>
                    <div className="text-center px-1 sm:px-2 relative z-10">
                      <p className="font-bold text-white text-sm sm:text-base md:text-xl lg:text-2xl mb-1 sm:mb-1 md:mb-2 truncate max-w-full drop-shadow-md">
                        {first.DisplayName}
                      </p>
                      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                        {first.PointsAccumulated} pts
                      </p>
                      <div className="mt-2 sm:mt-3 md:mt-4 inline-block bg-white/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full">
                        <span className="text-white text-[9px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider">
                          🏆 Campeão 🏆
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3º Lugar */}
              {third && (
                <div
                  className="flex flex-col items-center animate-slideUp flex-1 max-w-[140px] sm:max-w-[160px] md:max-w-[200px]"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative mb-3 md:mb-4 group">
                    <div className="absolute inset-0 bg-amber-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 flex items-center justify-center border-2 md:border-4 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                        {third.DisplayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-white rounded-full p-1 md:p-2 shadow-lg">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-amber-700" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-amber-500 to-amber-600 rounded-t-2xl w-full h-28 sm:h-32 md:h-36 lg:h-40 flex flex-col items-center justify-start pt-3 md:pt-4 shadow-xl border-t-2 md:border-t-4 border-white">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white drop-shadow-md mb-1 md:mb-2">
                      3º
                    </span>
                    <div className="text-center px-1 sm:px-2">
                      <p className="font-bold text-white text-xs sm:text-sm md:text-base lg:text-lg mb-1 truncate max-w-full">
                        {third.DisplayName}
                      </p>
                      <p className="text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold mt-1 md:mt-2">
                        {third.PointsAccumulated} pts
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mensagem de parabenização */}
            <div className="text-center mt-12 animate-fadeIn">
              <div className="inline-block bg-gradient-to-r from-amber-100 to-yellow-100 px-8 py-4 rounded-2xl border-2 border-amber-300 shadow-lg">
                <p className="text-amber-900 font-bold text-lg md:text-xl">
                  🏁 Parabéns aos campeões da temporada 2025! 🏁
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas dos Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topThree.map((driver, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-amber-200 animate-slideUp"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    index === 0
                      ? "bg-gradient-to-br from-yellow-400 to-amber-500"
                      : index === 1
                      ? "bg-gradient-to-br from-gray-400 to-gray-500"
                      : "bg-gradient-to-br from-amber-500 to-orange-600"
                  }`}
                >
                  {driver.DisplayName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-amber-900 text-lg">
                    {driver.DisplayName}
                  </h3>
                  <p className="text-amber-700 text-sm">{driver.Rank}º Lugar</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-amber-800 text-sm mb-1">Pontuação Total</p>
                <p className="text-4xl font-bold text-amber-900">
                  {driver.PointsAccumulated}
                </p>
                <p className="text-amber-700 text-sm mt-1">pontos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(-100%) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            box-shadow: 0 0 30px rgba(250, 204, 21, 0.5);
          }
          50% {
            box-shadow: 0 0 60px rgba(250, 204, 21, 0.8);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-confetti {
          animation: confetti linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChampionsPodiumPage;
