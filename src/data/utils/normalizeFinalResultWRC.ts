import FinalResultInterfaceWRC from "../constants/WRC/FinalResultInterfaceWRC";

export interface ResultadoFinal extends FinalResultInterfaceWRC {
  position: number;
  driver: string;
  car: string;
  time: string;
  diference: string;
}

function formatTime(time: string): string {
  return time.replace(/(\.\d{3})0+$/, "$1"); // remove zeros após 3 casas decimais
}

export function normalizeFinalResultWRC(
  results: FinalResultInterfaceWRC[]
): ResultadoFinal[] {
  // acessando o objeto dentro do array interno
  return results.map((result, index) => ({
    ...result,
    position: index + 1,
    driver: result.DisplayName,
    car: result.Vehicle,
    time: formatTime(result.Time),
    diference: formatTime(result.DifferenceToFirst),
  }));
}
