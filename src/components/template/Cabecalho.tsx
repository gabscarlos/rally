import Logo from "../shared/Logo";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <div
      className="flex flex-col h-28"
      style={{
        background:
          "linear-gradient(90deg, #23133a 0%, #07030d 50%, #23133a 100%)",
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-orange-500/20 via-orange-400/80 to-orange-500/20"></div>
    </div>
  );
}
