import "./Vantagens.css";

import {
  Coins,
  Monitor,
  Gift,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const vantagens = [
  {
    icon: Coins,
    title: "Lucros recorrentes",
    description: "Ganhe com cada assinatura vendida.",
  },
  {
    icon: Monitor,
    title: "Painel completo",
    description: "Gerencie clientes, planos, renovações e muito mais.",
  },
  {
    icon: Gift,
    title: "Materiais de apoio",
    description: "Artes, banners e textos prontos para divulgação.",
  },
  {
    icon: BadgeCheck,
    title: "Suporte exclusivo",
    description: "Atendimento prioritário para revendedores.",
  },
  {
    icon: ShieldCheck,
    title: "Servidores estáveis",
    description: "Alta performance e disponibilidade 24h.",
  },
];

const Vantagens = () => {
  return (
    <section className="vantagens">

      <div className="container">

        <div className="vantagens__box">

          <h2 className="vantagens__title">
            Vantagens de ser um revendedor <span>MajorPlay</span>
          </h2>

          <div className="vantagens__grid">

            {vantagens.map(({ icon: Icon, title, description }) => (

              <div
                key={title}
                className="vantagem"
              >

                <div className="vantagem__icon">

                  <Icon size={28} strokeWidth={2} />

                </div>

                <h3>{title}</h3>

                <p>{description}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Vantagens;