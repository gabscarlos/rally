// @/components/rally/TabelaResultadoFinal.tsx

import getCountryCode from "@/data/constants/ImagensBandeiras";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";

type ResultadoFinal = {
  position: number;
  driver: string;
  nationality: string;
  car: string;
  time: string;
  penalty: string;
};

type TabelaResultadoFinalProps = {
  results: ResultadoFinal[];
};

export default function TabelaResultadoFinal({
  results,
}: TabelaResultadoFinalProps) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Resultado Final</h2>
      <Table hoverable>
        <TableHead className="text-amber-50">
          <TableHeadCell className="bg-amber-800/80">#</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Piloto</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Nac.</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Carro</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Penalty</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {results.map((result) => (
            <TableRow
              key={result.position}
              className="bg-amber-100/30 border-amber-900 hover:bg-amber-800/80 hover:text-white"
            >
              <TableCell className="whitespace-nowrap font-medium">
                {result.position === 1
                  ? "🏆"
                  : result.position === 2
                  ? "🥈"
                  : result.position === 3
                  ? "🥉"
                  : result.position}
              </TableCell>
              <TableCell>{result.driver}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Image
                    src={`https://flagcdn.com/w40/${getCountryCode(
                      result.nationality
                    )}.png`}
                    alt={result.nationality}
                    width={40}
                    height={40}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  {result.nationality}
                </div>
              </TableCell>
              <TableCell>{result.car}</TableCell>
              <TableCell>{result.penalty || "-"}</TableCell>
              <TableCell>{result.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
