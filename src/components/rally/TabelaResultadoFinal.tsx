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
      <h2 className="text-xl font-bold mb-2 text-white">Resultado Final</h2>
      <Table striped>
        <TableHead className="bg-gray-100">
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Piloto</TableHeadCell>
          <TableHeadCell>Nac.</TableHeadCell>
          <TableHeadCell>Carro</TableHeadCell>
          <TableHeadCell>Penalty</TableHeadCell>
          <TableHeadCell>Tempo Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {results.map((result) => (
            <TableRow
              key={result.position}
              className="border-gray-700 bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-white">
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
                  <img
                    src={`https://flagcdn.com/w40/${getCountryCode(
                      result.nationality
                    )}.png`}
                    alt={result.nationality}
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
