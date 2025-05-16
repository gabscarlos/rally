import Image from "next/image";
import Link from "next/link";

export default interface JogoItemProps {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
}

export function JogoItem(props: JogoItemProps) {
  return (
    <Link
      href={`/game/${props.id}`}
      className="flex flex-col bg-blue-900/20 border border-white/10 rounded-xl overflow-hidden h-80"
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          src={props.imagem}
          alt={props.nome}
          width={400}
          height={100}
          className="object-contain"
        />
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-orange-500 text-xl font-bold">{props.nome}</h3>
          <p className="text-white">{props.descricao}</p>
        </div>
      </div>
    </Link>
  );
}
