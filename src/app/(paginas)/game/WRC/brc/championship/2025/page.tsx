import { RallyItem } from "@/components/rally/RallyItem";
import imagem from "@/data/constants/Imagens";
import Link from "next/link";

export default function Game() {
  return (
    <div className="flex-1 flex flex-col gap-5 container py-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center md:items-start justify-around text-center gap-5">
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/montecarlo"
          rallyName="Rally Monte-Carlo"
          group="WRC"
          imagem={imagem.montecarlo}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/sweden"
          rallyName="Rally Sweden"
          group="WRC"
          imagem={imagem.sweden}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/kenya"
          rallyName="Safari Rally Kenya"
          group="WRC"
          imagem={imagem.kenya}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/iberia"
          rallyName="Rally Iberia"
          group="WRC"
          imagem={imagem.iberia}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/portugal"
          rallyName="Rally de Portugal"
          group="WRC"
          imagem={imagem.portugal}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/italia"
          rallyName="Rally Italia Sardegna"
          group="WRC"
          imagem={imagem.italia}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/greece"
          rallyName="Rally Greece"
          group="WRC"
          imagem={imagem.greece}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/estonia"
          rallyName="Rally Estonia"
          group="WRC"
          imagem={imagem.estonia}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/finland"
          rallyName="Secto Rally Finland"
          group="WRC"
          imagem={imagem.finland}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/pacifico"
          rallyName="Rally Pacifico"
          group="WRC"
          imagem={imagem.pacifico}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/chile"
          rallyName="Rally Chile"
          group="WRC"
          imagem={imagem.chile}
        />
        <RallyItem
          id="WRC"
          url="/game/WRC/brc/championship/2025/tabela"
          rallyName="Tabela de Pontos"
          group="BRC"
          imagem="/pontos.png"
        />
      </div>
      <div className="mt-10">
        <Link
          href="/game/WRC/brc"
          className="bg-amber-800/80 text-white px-4 py-2 rounded"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
