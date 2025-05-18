"use client";

import { useState } from "react";
import TabelaWRC from "@/components/rally/TabelaWRC";
import TabelaResultadoFinalWRC from "@/components/rally/TabelaResultadoFinalWRC";
import ss1 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS1";
import ss2 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS2";
import ss3 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS3";
import finalResult from "@/data/constants/WRC/2wdchaos/4fun/portugal/finalResult";
import { normalizeResultsWRC } from "@/data/utils/normalizeResultsWRC";
import { normalizeFinalResultWRC } from "@/data/utils/normalizeFinalResultWRC";
import SS4 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS4";
import SS5 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS5";
import SS6 from "@/data/constants/WRC/2wdchaos/4fun/portugal/SS6";

const stages = {
  SS1: ss1,
  SS2: ss2,
  SS3: ss3,
  SS4: SS4,
  SS5: SS5,
  SS6: SS6,
};

const options = ["SS1", "SS2", "SS3", "SS4", "SS5", "SS6", "Final"] as const;

export default function Group4GravelPage() {
  const [selectedOption, setSelectedOption] =
    useState<(typeof options)[number]>("SS1");

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
      <h2 className="text-xl font-bold mb-2">Resultado {selectedOption}</h2>

      {selectedOption === "Final" ? (
        <TabelaResultadoFinalWRC
          results={normalizeFinalResultWRC(finalResult)}
        />
      ) : (
        <TabelaWRC
          results={normalizeResultsWRC(stages[selectedOption])}
          ssName={selectedOption}
        />
      )}
    </div>
  );
}
