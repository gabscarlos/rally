import { RallyItem } from "@/components/rally/RallyItem";
import imagem from "@/data/constants/Imagens";
import Link from "next/link";

export default function Brc() {
  return (
    <div className="flex-1 flex flex-col gap-5 container py-10">
      <div className="flex flex-col sm:flex-row items-center md:items-start justify-around text-center md:text-left gap-5 md:gap-10">
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025"
          rallyName="Championship 2025"
          group="WRC"
          imagem={imagem.wrc2}
        />
      </div>
      <div className="mt-10">
        <Link
          href="/game/WRC"
          className="bg-amber-800/80 text-white px-4 py-2 rounded"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
