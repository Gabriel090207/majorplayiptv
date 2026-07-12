import "./Servidores.css";
import Reveal from "../../../components/Reveal/Reveal";

import {
  Check,
  Clapperboard,
  Film,
  Play,
  Radio,
  Tv,
} from "lucide-react";

import { servidores } from "../../../data/servidores";

const Servidores = () => {
  return (
    <section className="servidores" id="servidores">
      <div className="container">

        <Reveal
          as="div"
          className="servidores__header"
        >
          <span className="servidores__badge">
            NOSSOS SERVIDORES
          </span>

          <h2 className="servidores__title">
            Escolha o melhor <span>servidor</span> para revender
          </h2>

          <p className="servidores__description">
            Trabalhamos com diferentes opções de servidores para você oferecer
            qualidade, variedade e estabilidade aos seus clientes.
          </p>
        </Reveal>

        <Reveal
          as="div"
          className="servidores__grid"
        >
          {servidores.map((servidor) => (
            <article
              key={servidor.id}
              className="servidor"
            >

              <div className="servidor__image">

                <img
                  src={servidor.image}
                  alt={`Servidor ${servidor.title}`}
                  loading="lazy"
                />

                <div className="servidor__overlay" />

                {servidor.destaque && (
                  <span className="servidor__highlight">
                    EM ALTA
                  </span>
                )}

                <div className="servidor__play">
                  <Play
                    size={22}
                    fill="currentColor"
                  />
                </div>

              </div>

              <div className="servidor__content">

                <h3>{servidor.title}</h3>

                <p className="servidor__description">
                  {servidor.description}
                </p>

                <div className="servidor__features">

                  <div className="servidor__feature">
                    <Tv size={18} />
                    <span>{servidor.channels}</span>
                  </div>

                  <div className="servidor__feature">
                    <Film size={18} />
                    <span>{servidor.movies}</span>
                  </div>

                  <div className="servidor__feature">
                    <Clapperboard size={18} />
                    <span>{servidor.series}</span>
                  </div>

                  <div className="servidor__feature">
                    <Radio size={18} />
                    <span>{servidor.quality}</span>
                  </div>

                </div>

                <div className="servidor__benefits">

                  <span>
                    <Check size={15} />
                    Atualizações frequentes
                  </span>

                  <span>
                    <Check size={15} />
                    Suporte especializado
                  </span>

                </div>

                <a
                  href="#cadastro"
                  className="servidor__button"
                >
                  QUERO REVENDER
                </a>

              </div>

            </article>
          ))}
        </Reveal>

        <Reveal
          as="div"
          className="servidores__footer"
        >
          <p>
            Ainda está em dúvida sobre qual servidor escolher?
          </p>

          <a
            href="#cadastro"
            className="servidores__button"
          >
            <Play
              size={18}
              fill="currentColor"
            />
            CONHECER TODOS OS SERVIDORES
          </a>
        </Reveal>

      </div>
    </section>
  );
};

export default Servidores;