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
      <h2 className="text-xl text-white font-semibold mb-2">
        {ssName} - Resultados
      </h2>
      <Table striped>
        <TableHead className="bg-gray-100">
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Piloto</TableHeadCell>
          <TableHeadCell>Nac.</TableHeadCell>
          <TableHeadCell>Carro</TableHeadCell>
          <TableHeadCell>Tempo 1</TableHeadCell>
          <TableHeadCell>Tempo 2</TableHeadCell>
          <TableHeadCell>Tempo Final</TableHeadCell>
          <TableHeadCell>Penalty</TableHeadCell>
          <TableHeadCell>Tempo Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {sorted.map((racer, index) => {
            const penalty =
              typeof racer.Penalty === "number" ? racer.Penalty : 0;

            const totalTime = racer.time3 + penalty;

            return (
              <TableRow
                key={racer["User name"]}
                className="border-gray-700 bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-white">
                  {index + 1}
                </TableCell>
                <TableCell>{racer["User name"]}</TableCell>
                <TableCell className="px-2 py-1 text-center">
                  <div className="flex items-center gap-1">
                    <img
                      src={`https://flagcdn.com/w40/${getCountryCode(
                        racer.Nationality
                      )}.png`}
                      alt={racer.Nationality}
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
