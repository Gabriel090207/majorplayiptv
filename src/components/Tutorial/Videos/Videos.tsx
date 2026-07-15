import "./Videos.css";

import { useState } from "react";

import Reveal from "../../Reveal/Reveal";

import { tutorials } from "../../../data/tutorials";

const Videos = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorials[0]);

  return (
    <section className="tutorial-videos">
      <div className="container">

        <Reveal
          as="div"
          className="tutorial-videos__header"
        >
          <span className="tutorial-videos__badge">
            TUTORIAIS
          </span>

          <h2 className="tutorial-videos__title">
            Escolha um tutorial para assistir
          </h2>

          <p className="tutorial-videos__description">
            Selecione um dos tópicos abaixo para visualizar o vídeo correspondente.
          </p>
        </Reveal>

        <Reveal
          as="div"
          className="tutorial-videos__content"
        >

          <div className="tutorial-videos__filters">

            {tutorials.map((tutorial) => (

              <button
                key={tutorial.id}
                onClick={() => setSelectedTutorial(tutorial)}
                className={`tutorial-videos__filter ${
                  selectedTutorial.id === tutorial.id
                    ? "tutorial-videos__filter--active"
                    : ""
                }`}
              >
                {tutorial.title}
              </button>

            ))}

          </div>

          <div className="tutorial-videos__player">

            <video
              key={selectedTutorial.video}
              controls
              controlsList="nodownload"
              preload="metadata"
            >
              <source
                src={selectedTutorial.video}
                type="video/mp4"
              />

              Seu navegador não suporta vídeos.
            </video>

          </div>

        </Reveal>

      </div>
    </section>
  );
};

export default Videos;