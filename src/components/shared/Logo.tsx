import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
    </div>
  );
}
