import SSInterface from "../constants/RBR/SSInterface";

export interface StageResult extends SSInterface {
  time1: number;
  time2: number;
  time3: number;
  Penalty: number;
}

export function normalizeResults(results: SSInterface[]): StageResult[] {
  return results
    .filter((r) => !isNaN(Number(r.time3)) && Number(r.time3) > 0)
    .map((r) => ({
      ...r,
      time1: Number(r.time1),
      time2: Number(r.time2),
      time3: Number(r.time3),
      Penalty: r.Penalty !== "" ? Number(r.Penalty) : 0,
    }));
}
