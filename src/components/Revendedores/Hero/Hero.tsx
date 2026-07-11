import "./Hero.css";

import HeroImage from "../../../assets/revendedor.png";

const Hero = () => {
  return (
    <section className="reseller-hero">

      <div className="container reseller-hero__container">

        <div className="reseller-hero__content">

          <span className="reseller-hero__badge">
            ÁREA DO REVENDEDOR
          </span>

          <h1 className="reseller-hero__title">
            Seja um revendedor
            <span> MAJORPLAY e aumente seus ganhos!</span>
          </h1>

          <p className="reseller-hero__description">
            Ofereça o melhor serviço de IPTV do mercado e tenha lucros
            recorrentes com total suporte, estabilidade e servidores de alta
            performance.
          </p>

          <div className="reseller-hero__buttons">

            <a href="#cadastro" className="reseller-hero__button">
              QUERO SER REVENDEDOR
            </a>

          </div>

        </div>

        <div className="reseller-hero__image">

          <img
            src={HeroImage}
            alt="Revendedor MajorPlay"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;