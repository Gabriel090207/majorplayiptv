import "./Tutorial.css";

import Reveal from "../../components/Reveal/Reveal";
import CTA from "../../components/Home/CTA/CTA";

const Tutorial = () => {
  return (
    <>
      <main className="tutorial">

        <div className="container">

          <Reveal
            as="div"
            className="tutorial__header"
          >
            <span className="tutorial__badge">
              CENTRAL DE TUTORIAIS
            </span>

            <h1 className="tutorial__title">
              Aprenda a instalar e utilizar a
              <span> MajorPlay IPTV</span>
            </h1>

            <p className="tutorial__description">
              Assista ao vídeo abaixo e veja como instalar,
              configurar e aproveitar todos os recursos da
              plataforma em poucos minutos.
            </p>
          </Reveal>

          <Reveal
            as="div"
            className="tutorial__video"
          >
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Tutorial MajorPlay IPTV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Reveal>

        </div>

      </main>

      <CTA />
    </>
  );
};

export default Tutorial;