import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "../shared/Logo";

export default function Rodape() {
  return (
    <footer className="flex flex-col bg-black/20 mt-10">
      <div className="h-px bg-gradient-to-r from-amber-500/20 via-amber-900/80 to-amber-500/20"></div>
      <div className="container flex flex-col py-10 gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
          <Logo />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold  pb-2">Sobre</span>
            <span className="text-sm">Política de Privacidade</span>
            <span className="text-sm">Termos de Uso</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold pb-2">Contato</span>
            <span className="text-sm">gabrielcarllos@yahoo.com.br</span>
            <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
              <IconBrandWhatsapp size={20} className="text-green-500" />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
          <div className="flex gap-2 text-amber-900">
            <IconBrandYoutube size={28} stroke={1} />
            <IconBrandInstagram size={28} stroke={1} />
            <IconBrandFacebook size={28} stroke={1} />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm">
            <div className="flex gap-1.5">
              <span>Feito com</span>
              <span>❤️</span>
              <span>em {new Date().getFullYear()}</span>
            </div>
            <span className="hidden md:inline-block">-</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
