import "./Highlights.css";

import {
  RefreshCcw,
  ShieldCheck,
  Monitor,
  Wrench,
  Tv,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: RefreshCcw,
    title: "ATUALIZAÇÕES",
    subtitle: "Diárias",
  },
  {
    icon: ShieldCheck,
    title: "SEM TRAVAMENTOS",
    subtitle: "Estabilidade e velocidade",
  },
  {
    icon: Monitor,
    title: "COMPATÍVEL",
    subtitle: "Com vários dispositivos",
  },
  {
    icon: Wrench,
    title: "INSTALAÇÃO FÁCIL",
    subtitle: "Em poucos minutos",
  },
  {
    icon: Tv,
    title: "ASSISTA ONDE QUISER",
    subtitle: "Em casa ou na rua",
  },
  {
    icon: Headphones,
    title: "SUPORTE 24H",
    subtitle: "Atendimento via WhatsApp",
  },
];

const Highlights = () => {
  return (
    <div className="highlights">

      {items.map(({ icon: Icon, title, subtitle }) => (
        <div
          className="highlight"
          key={title}
        >
          <Icon
            size={24}
            strokeWidth={2}
          />

          <strong>{title}</strong>

          <span>{subtitle}</span>

        </div>
      ))}

    </div>
  );
};

export default Highlights;