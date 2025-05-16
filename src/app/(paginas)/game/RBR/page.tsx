import { RallyItem } from "@/components/rally/RallyItem";
import carro from "@/data/constants/ImagensCarros";

export default function Game() {
  return (
    <div className="flex-1 flex justify-center gap-5 container py-10">
      <RallyItem
        id="RBR"
        url="/group4gravel"
        rallyName="RWD 4fun Gravel"
        group="Grupo 4"
        imagem={carro.group4Gravel}
      />
      <RallyItem
        id="RBR"
        url="/group4tarmac"
        rallyName="RWD 4fun Tarmac"
        group="Grupo 4"
        imagem={carro.group4Tarmac}
      />
    </div>
  );
}
