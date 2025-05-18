"use client";

import { useState } from "react";
import Tabela from "@/components/rally/Tabela";
import TabelaResultadoFinal from "@/components/rally/TabelaResultadoFinal";
import { normalizeResults } from "@/data/utils/normalizeResults";
import ss1 from "@/data/constants/RBR/group4tarmac/SS1";
import ss2 from "@/data/constants/RBR/group4tarmac/SS2";
import ss3 from "@/data/constants/RBR/group4tarmac/SS3";
import finalResult from "@/data/constants/RBR/group4tarmac/finalResult";
import { normalizeFinalResult } from "@/data/utils/normalizeFinalResult";

const stages = {
  SS1: ss1,
  SS2: ss2,
  SS3: ss3,
};

const options = ["SS1", "SS2", "SS3", "Final"] as const;

export default function Group4GravelPage() {
  const [selectedOption, setSelectedOption] =
    useState<(typeof options)[number]>("SS1");

  return (
    <div className="p-4 container">
      <div className="flex gap-2 mb-4">
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

      {selectedOption === "Final" ? (
        <TabelaResultadoFinal results={normalizeFinalResult(finalResult)} />
      ) : (
        <Tabela
          results={normalizeResults(stages[selectedOption])}
          ssName={selectedOption}
        />
      )}
    </div>
  );
}
