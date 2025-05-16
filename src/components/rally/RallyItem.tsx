import Image from "next/image";
import Link from "next/link";

export default interface RallyItemProps {
  id: string;
  url: string;
  rallyName: string;
  group: string;
  imagem: string;
}

export function RallyItem(props: RallyItemProps) {
  return (
    <Link
      href={props.url}
      className="flex flex-col bg-blue-900/20 border border-white/10 rounded-xl overflow-hidden h-64 w-52"
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          src={props.imagem}
          alt={props.group}
          width={400}
          height={100}
          className="object-contain"
        />
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-orange-500 text-xl font-bold">
            {props.rallyName}
          </h3>
          <p className="text-white">{props.group}</p>
        </div>
      </div>
    </Link>
  );
}
