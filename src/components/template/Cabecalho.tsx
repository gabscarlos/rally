import Logo from "../shared/Logo";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <div
      className="flex flex-col h-28"
      style={{
        background:
          "linear-gradient(90deg, #fef7c5 0%, #e0d6d0 50%, #fef7c5 100%)",
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/game"
            className="flex items-center gap-2 text-orange-900 font-bold text-2xl"
          >
            <span className="bg-amber-800/80 text-white text-lg rounded-lg px-4 py-2">
              Resultados
            </span>
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-orange-500/20 via-orange-900/80 to-orange-500/20"></div>
    </div>
  );
}
