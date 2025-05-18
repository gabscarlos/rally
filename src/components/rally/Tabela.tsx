"use client";

import React from "react";
import getCountryCode from "@/data/constants/ImagensBandeiras";
import { normalizeResults } from "@/data/utils/normalizeResults";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";

type StageResult = {
  SS: number;
  "Stage name": string;
  Nationality: string;
  "User name": string;
  "Real name": string;
  Group: string;
  "Car name": string;
  time1: number;
  time2: number;
  time3: number;
  "Finish realtime": string;
  Penalty: number | string;
  "Service penalty": string;
  "Super rally": string;
  Progress: string;
  Comment: string;
};

type Props = {
  results: StageResult[];
  ssName: string;
};

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = (seconds % 60).toFixed(3).padStart(6, "0");
  return `${mins}:${secs}`;
}

export default function Tabela({ results, ssName }: Props) {
  const normalized = normalizeResults(results);

  // Ordena os resultados por tempo3 + penalty
  const sorted = [...normalized].sort((a, b) => {
    const aPenalty = typeof a.Penalty === "number" ? a.Penalty : 0;
    const bPenalty = typeof b.Penalty === "number" ? b.Penalty : 0;
    return a.time3 + aPenalty - (b.time3 + bPenalty);
  });

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-2">{ssName} - Resultados</h2>
      <Table hoverable>
        <TableHead className="text-amber-50">
          <TableHeadCell className="bg-amber-800/80">#</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Piloto</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Nac.</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Carro</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo 1</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo 2</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo Final</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Penalty</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {sorted.map((racer, index) => {
            const penalty =
              typeof racer.Penalty === "number" ? racer.Penalty : 0;

            const totalTime = racer.time3 + penalty;

            return (
              <TableRow
                key={racer["User name"]}
                className="bg-amber-100/30 border-amber-900 hover:bg-amber-800/80 hover:text-white"
              >
                <TableCell className="whitespace-nowrap font-medium">
                  {index + 1}
                </TableCell>
                <TableCell>
                  {racer["Real name"] || racer["User name"]}
                </TableCell>
                <TableCell className="px-2 py-1 text-center">
                  <div className="flex items-center gap-1">
                    <Image
                      src={`https://flagcdn.com/w40/${getCountryCode(
                        racer.Nationality
                      )}.png`}
                      alt={racer.Nationality}
                      width={40}
                      height={40}
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    {racer.Nationality}
                  </div>
                </TableCell>
                <TableCell>{racer["Car name"]}</TableCell>
                <TableCell>{formatTime(racer.time1)}</TableCell>
                <TableCell>{formatTime(racer.time2)}</TableCell>
                <TableCell>{formatTime(racer.time3)}</TableCell>
                <TableCell>{penalty || "-"}</TableCell>
                <TableCell>{formatTime(totalTime)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
