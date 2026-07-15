import "./Hero.css";

import Reveal from "../../Reveal/Reveal";

const Hero = () => {
  return (
    <section className="tutorial-hero">

      <div className="container tutorial-hero__container">

        <Reveal
          as="div"
          className="tutorial-hero__content"
        >

          <span className="tutorial-hero__badge">
            CENTRAL DE TUTORIAIS
          </span>

          <h1 className="tutorial-hero__title">
            Aprenda a instalar e utilizar a
            <span> MajorPlay IPTV</span>
          </h1>

          <p className="tutorial-hero__description">
            Encontre tutoriais rápidos para instalar,
            configurar e aproveitar todos os recursos
            da plataforma.
          </p>

        </Reveal>

      </div>

    </section>
  );
};

export default Hero;