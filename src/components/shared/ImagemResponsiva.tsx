import Image, { StaticImageData } from "next/image";

interface ImagemResponsivaProps {
  imagem: string | StaticImageData;
  className?: string;
}

export default function ImagemResponsiva(props: ImagemResponsivaProps) {
  return (
    <Image
      src={props.imagem}
      alt="Imagem"
      width={300}
      height={200}
      className={`
                    w-[100%] h-[120px]
                    sm:w-[200px] sm:h-[330px]
                    md:w-[350px] md:h-[365px]
                    lg:w-[500px] lg:h-[335px]
                    rounded-xl object-cover
                    ${props.className ?? ""}
                `}
    />
  );
}
