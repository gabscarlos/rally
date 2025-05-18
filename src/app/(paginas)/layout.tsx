import Pagina from "@/components/template/Pagina";
import { Analytics } from "@vercel/analytics/next";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Pagina>
      <Analytics />
      {props.children}
    </Pagina>
  );
}
