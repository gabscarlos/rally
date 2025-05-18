import SSInterfaceWRC from "../constants/WRC/SSIterfaceWRC";

export interface StageResultWRC extends SSInterfaceWRC {
  position: number;
  driver: string;
  car: string;
  time: string;
  timePenalty: string;
  diference: string;
}

function formatTime(time: string): string {
  return time.replace(/(\.\d{3})0+$/, "$1"); // remove zeros após 3 casas decimais
}

export function normalizeResultsWRC(
  results: SSInterfaceWRC[]
): StageResultWRC[] {
  // acessando o objeto dentro do array interno
  return results.map((result, index) => ({
    ...result,
    position: index + 1,
    driver: result.DisplayName,
    car: result.Vehicle,
    time: formatTime(result.Time),
    timePenalty: result.TimePenalty,
    diference: formatTime(result.DifferenceToFirst),
  }));
}
