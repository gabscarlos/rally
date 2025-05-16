import FinalResultInterface from "../constants/RBR/FinalResultInterface";

export interface ResultadoFinal extends FinalResultInterface {
  position: number;
  driver: string;
  nationality: string;
  car: string;
  time: string;
  penalty: string;
}

export function normalizeFinalResult(
  results: FinalResultInterface[]
): ResultadoFinal[] {
  // acessando o objeto dentro do array interno
  return results.map((result, index) => ({
    ...result,
    position: index + 1,
    driver: result.user_name,
    nationality: result.nationality,
    car: result.car,
    time: result.time3,
    penalty: result.penalty,
  }));
}
