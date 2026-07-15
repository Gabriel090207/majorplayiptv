import "./HowItWorks.css";
import Reveal from "../../../components/Reveal/Reveal";

import {
  Search,
  BadgeCheck,
  MonitorCog,
  Tv,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Escolha seu plano",
    description:
      "Selecione o plano ideal para o seu perfil e conclua seu pedido de forma rápida e segura.",
  },
  {
    id: "02",
    icon: BadgeCheck,
    title: "Receba seus dados de acesso",
    description:
      "Após a confirmação do pagamento, enviaremos rapidamente seus dados de acesso por e-mail.",
  },
  {
    id: "03",
    icon: MonitorCog,
    title: "Instale e configure",
    description:
      "Baixe o aplicativo compatível com seu dispositivo e siga nosso tutorial para configurar tudo em poucos minutos.",
  },
  {
    id: "04",
    icon: Tv,
    title: "Aproveite a MajorPlay",
    description:
      "Assista canais ao vivo, filmes e séries com qualidade, estabilidade e suporte sempre que precisar.",
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
            PASSO A PASSO
          </span>

          <h2>
            Como começar a usar a <span>MajorPlay IPTV?</span>
          </h2>

          <p>
            Do pedido ao primeiro acesso, todo o processo é simples,
            rápido e leva apenas alguns minutos.
          </p>
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