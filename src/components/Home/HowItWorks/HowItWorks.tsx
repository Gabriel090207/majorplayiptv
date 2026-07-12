import "./HowItWorks.css";
import Reveal from "../../../components/Reveal/Reveal";

import {
  Search,
  BadgeCheck,
  MonitorCog,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Escolha seu plano",
    description:
      "Selecione o plano ideal para você e faça seu pedido.",
  },
  {
    id: "02",
    icon: BadgeCheck,
    title: "Receba seu acesso",
    description:
      "Enviaremos seus dados de acesso rapidamente pelo WhatsApp.",
  },
  {
    id: "03",
    icon: MonitorCog,
    title: "Configure em minutos",
    description:
      "Instale em qualquer dispositivo seguindo nosso tutorial.",
  },
  {
    id: "04",
    icon: Sparkles,
    title: "Aproveite",
    description:
      "Assista milhares de conteúdos com qualidade e estabilidade.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container">
        <Reveal
          as="div"
          className="section-header"
        >
          <span className="section-badge">
            FÁCIL, RÁPIDO E PRÁTICO
          </span>

          <h2>
            Como <span>funciona?</span>
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="how-it-works__steps"
        >
          {steps.map(({ id, icon: Icon, title, description }) => (
            <div
              className="how-it-works__step"
              key={id}
            >
              <div className="how-it-works__icon">
                <Icon size={30} strokeWidth={2.2} />
              </div>

              <div className="how-it-works__number">
                {id}
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;