import { RallyItem } from "@/components/rally/RallyItem";
import imagem from "@/data/constants/Imagens";

export default function Game() {
  return (
    <div className="flex-1 flex justify-center gap-5 container py-10">
      <div className="flex flex-col sm:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-10">
        <RallyItem
          id="WRC"
          url="/game/WRC/2wdchaos/portugal"
          rallyName="Rally Portugal"
          group="H2 RWD"
          imagem={imagem.portugal}
        />
      </div>
    </div>
  );
}
