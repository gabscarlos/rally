import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

type ResultadoWRC = {
  position: number;
  driver: string;
  nationality: string;
  car: string;
  time: string;
  diference: string;
};

type TabelaResultadoWRCProps = {
  results: ResultadoWRC[];
};

export default function TabelaResultadoWRC({
  results,
}: TabelaResultadoWRCProps) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Resultado Final</h2>
      <Table hoverable>
        <TableHead className="text-amber-50">
          <TableHeadCell className="bg-amber-800/80">#</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Piloto</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Carro</TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">
            Diferença para 1°
          </TableHeadCell>
          <TableHeadCell className="bg-amber-800/80">Tempo Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {results.map((result) => (
            <TableRow
              key={result.position}
              className="bg-amber-100/30 border-amber-900 hover:bg-amber-800/80 hover:text-white"
            >
              <TableCell className="whitespace-nowrap font-medium">
                {result.position}
              </TableCell>
              <TableCell>{result.driver}</TableCell>
              <TableCell>{result.car}</TableCell>
              <TableCell>{result.diference || "-"}</TableCell>
              <TableCell>{result.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
