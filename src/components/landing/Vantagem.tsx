import { StaticImageData } from "next/image";
import ImagemResponsiva from "@/components/shared/ImagemResponsiva";

export interface VantagemProps {
  imagem: string | StaticImageData;
  titulo: string;
  subtitulo?: string;
  inverter?: boolean;
}

export default function Vantagem(props: VantagemProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-around w-full gap-6
        ${props.inverter ? "sm:flex-row-reverse" : "sm:flex-row"}
    `}
    >
      <ImagemResponsiva
        imagem={props.imagem}
        className={props.inverter ? "sm:rotate-6" : "sm:rotate-6"}
      />
      <div
        className={`
          flex flex-col gap-y-6 sm:w-[350px]
          text-center sm:text-left
        `}
      >
        <div className=" flex flex-col text-amber-800/80 font-black text-2xl sm:text-4xl">
          {props.titulo}
        </div>
        {props.subtitulo && (
          <span className="font-light text-base sm:text-lg text-amber-950">
            {props.subtitulo}
          </span>
        )}
      </div>
    </div>
  );
}
