"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Trophy, Medal, Award } from "lucide-react";
import tabelaMc from "@/data/constants/WRC/brc/2025/montecarlo/tabelaMc";
import tabelaSweden from "@/data/constants/WRC/brc/2025/sweden/tabelaSweden";
import tabelaKenya from "@/data/constants/WRC/brc/2025/kenya/tabelaKenya";
import tabelaIberia from "@/data/constants/WRC/brc/2025/iberia/tabelaIberia";
import tabelaPortugal from "@/data/constants/WRC/brc/2025/portugal/tabelaPortugal";
import tabelaItalia from "@/data/constants/WRC/brc/2025/italia/tabelaItalia";
import tabelaGreece from "@/data/constants/WRC/brc/2025/greece/tabelaGreece";
import tabelaEstonia from "@/data/constants/WRC/brc/2025/estonia/tabelaEstonia";
import tabelaFinland from "@/data/constants/WRC/brc/2025/finland/tabelaFinland";

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

  // Soma os pontos de todas as tabelas para cada piloto
  tables.forEach((table) => {
    table.forEach((result) => {
      const currentPoints = pointsMap.get(result.DisplayName) || 0;
      pointsMap.set(
        result.DisplayName,
        currentPoints + result.PointsAccumulated
      );
    });
  });

  // Converte o Map para array e ordena por pontos (decrescente)
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

const RallyResultsTable = () => {
  // Calcula a classificação geral do campeonato usando useMemo para otimização
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
    ]);
  }, []);

  const [results] = useState(championshipStandings);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getRankStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-400";
      case 3:
        return "bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600";
      default:
        return "hover:bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200/20 via-amber-300/20 to-amber-200/20 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-950 mb-2">
            Brasil Rally Championship 2025
          </h1>
          <p className="text-amber-900 text-lg">
            Pontuação Geral do Campeonato
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-amber-800/80 to-amber-700/80 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-white font-semibold">
              <div className="col-span-2 text-center">Posição</div>
              <div className="col-span-6">Piloto</div>
              <div className="col-span-4 text-center">Pontos Totais</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {results.map((result, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 gap-4 px-6 py-4 transition-all duration-200 ${getRankStyles(
                  result.Rank!
                )}`}
              >
                {/* Rank */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    {getRankIcon(result.Rank!)}
                    <span
                      className={`font-bold text-lg ${
                        result.Rank! <= 3 ? "text-slate-700" : "text-slate-600"
                      }`}
                    >
                      {result.Rank}º
                    </span>
                  </div>
                </div>

                {/* Display Name */}
                <div className="col-span-6 flex items-center">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        result.Rank === 1
                          ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                          : result.Rank === 2
                          ? "bg-gradient-to-r from-gray-400 to-gray-500"
                          : result.Rank === 3
                          ? "bg-gradient-to-r from-amber-600 to-orange-600"
                          : "bg-gradient-to-r from-amber-800 to-amber-900"
                      }`}
                    >
                      {result.DisplayName.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-slate-700 text-lg">
                      {result.DisplayName}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="col-span-4 flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span
                      className={`font-bold text-xl ${
                        result.Rank! <= 3 ? "text-slate-700" : "text-slate-600"
                      }`}
                    >
                      {result.PointsAccumulated}
                    </span>
                    <span className="text-slate-500 text-sm">pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-900/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-2">
              Total de Pilotos
            </h3>
            <p className="text-3xl font-bold text-amber-400">
              {results.length}
            </p>
          </div>
          <div className="bg-amber-900/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-2">
              Maior Pontuação
            </h3>
            <p className="text-3xl font-bold text-yellow-400">
              {Math.max(...results.map((r) => r.PointsAccumulated))} pts
            </p>
          </div>
          <div className="bg-amber-900/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <h3 className="text-white text-lg font-semibold mb-2">
              Total de Pontos
            </h3>
            <p className="text-3xl font-bold text-amber-400">
              {results.reduce((sum, r) => sum + r.PointsAccumulated, 0)} pts
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link
          href="/game/WRC/brc/championship/2025"
          className="bg-amber-800/80 text-white px-4 py-2 rounded"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default RallyResultsTable;
