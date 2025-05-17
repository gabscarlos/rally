import { JogoItem } from "@/components/shared/JogoItem";

export default function Home() {
  return (
    <div className="flex-1 flex justify-center gap-5 container py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-10">
        <JogoItem
          id="RBR"
          nome="Richard Burns Rally"
          descricao="Resultados"
          imagem="https://traxion.gg/wp-content/uploads/2021/06/RichardBurnsRally_FeaturedImage.jpg"
        />
        <JogoItem
          id="WRC"
          nome="EA Sports WRC 24"
          descricao="Resultados"
          imagem="https://cdn1.epicgames.com/offer/50b6612049324d0faf8642014139b082/EGS_EASPORTSWRC24_Codemasters_S1_2560x1440-85ade86f7f8563a38f7e121826743a8a"
        />
      </div>
    </div>
  );
}
