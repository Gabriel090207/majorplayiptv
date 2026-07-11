import "./Hero.css";
import HeroImage from "../../../assets/hero.png";

import {
  ArrowRight,
  Tv,
  Film,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="inicio">

      <div className="container hero__container">

        <div className="hero__content">

          <span className="hero__badge">
            O MELHOR IPTV PARA VOCÊ!
          </span>

          <h1 className="hero__title">
            Todos os seus conteúdos
            <span> em um só lugar!</span>
          </h1>

          <p className="hero__description">
            Canais ao vivo, filmes, séries e muito mais com qualidade,
            estabilidade e o melhor custo-benefício.
          </p>

          <div className="hero__infos">

            <div className="hero__info">
              <Tv size={22}/>
              <div>
                <strong>+10.000</strong>
                <span>Canais</span>
              </div>
            </div>

            <div className="hero__info">
              <Film size={22}/>
              <div>
                <strong>+40.000</strong>
                <span>Filmes e Séries</span>
              </div>
            </div>

            <div className="hero__info">
              <MonitorPlay size={22}/>
              <div>
                <strong>Qualidade</strong>
                <span>HD • Full HD • 4K</span>
              </div>
            </div>

            <div className="hero__info">
              <ShieldCheck size={22}/>
              <div>
                <strong>Suporte</strong>
                <span>Rápido e dedicado</span>
              </div>
            </div>

          </div>

          <div className="hero__buttons">

            <a href="#teste" className="hero__button hero__button--primary">
              TESTE GRÁTIS AGORA!
              <ArrowRight size={18}/>
            </a>

            <a href="#planos" className="hero__button hero__button--secondary">
              VER PLANOS
            </a>

          </div>

        </div>

        <div className="hero__visual">
          <img
            src={HeroImage}
            alt="Major Play IPTV"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;