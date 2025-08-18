"use client";

import { useState } from "react";
import TabelaWRC from "@/components/rally/TabelaWRC";
import TabelaResultadoFinalWRC from "@/components/rally/TabelaResultadoFinalWRC";
import TabelaDePontos from "@/components/rally/TabelaPontuacao";
import ss1 from "@/data/constants/WRC/brc/2025/italia/SS1";
import ss2 from "@/data/constants/WRC/brc/2025/italia/SS2";
import ss3 from "@/data/constants/WRC/brc/2025/italia/SS3";
import finalResult from "@/data/constants/WRC/brc/2025/italia/finalResult";
import { normalizeResultsWRC } from "@/data/utils/normalizeResultsWRC";
import { normalizeFinalResultWRC } from "@/data/utils/normalizeFinalResultWRC";
import SS4 from "@/data/constants/WRC/brc/2025/italia/SS4";
import SS5 from "@/data/constants/WRC/brc/2025/italia/SS5";
import SS6 from "@/data/constants/WRC/brc/2025/italia/SS6";
import SS7 from "@/data/constants/WRC/brc/2025/italia/SS7";
import SS8 from "@/data/constants/WRC/brc/2025/italia/SS8";
import SS9 from "@/data/constants/WRC/brc/2025/italia/SS9";
import SS10 from "@/data/constants/WRC/brc/2025/italia/SS10";
import tabelaItalia from "@/data/constants/WRC/brc/2025/italia/tabelaItalia";
import Link from "next/link";

const stages = {
  SS1: ss1,
  SS2: ss2,
  SS3: ss3,
  SS4: SS4,
  SS5: SS5,
  SS6: SS6,
  SS7: SS7,
  SS8: SS8,
  SS9: SS9,
  SS10: SS10,
};

const options = [
  "SS1",
  "SS2",
  "SS3",
  "SS4",
  "SS5",
  "SS6",
  "SS7",
  "SS8",
  "SS9",
  "SS10",
  "Final",
  "Pontuação",
] as const;

export default function PortugalPage() {
  const [selectedOption, setSelectedOption] =
    useState<(typeof options)[number]>("SS1");

  const renderContent = () => {
    if (selectedOption === "Final") {
      return (
        <TabelaResultadoFinalWRC
          results={normalizeFinalResultWRC(finalResult)}
        />
      );
    } else if (selectedOption === "Pontuação") {
      return <TabelaDePontos results={tabelaItalia} />;
    } else {
      return (
        <TabelaWRC
          results={normalizeResultsWRC(stages[selectedOption])}
          ssName={selectedOption}
        />
      );
    }
  };

  const getTitle = () => {
    if (selectedOption === "Final") {
      return "Resultado Final";
    } else if (selectedOption === "Pontuação") {
      return "Tabela de Pontuação";
    } else {
      return `Resultado ${selectedOption}`;
    }
  };

  return (
    <div className="p-4 container">
      <div className="flex flex-wrap md:flex-row items-center md:items-start justify-around text-center md:text-left gap-5 md:gap-0 mb-5">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`px-4 py-2 rounded ${
              selectedOption === option
                ? "bg-amber-800/80 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {option === "Final" ? "Resultado Final" : option}
          </button>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-2">{getTitle()}</h2>

      {renderContent()}

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
}
