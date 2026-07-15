import "./Trending.css";
import Reveal from "../../../components/Reveal/Reveal";

import { useState } from "react";
import { ArrowRight} from "lucide-react";

import { trending } from "../../../data/trending";

const Trending = () => {

const [category, setCategory] = useState("Destaques");

const filteredMovies = trending.filter(
  (movie) => movie.category === category
);


  return (
    <section className="trending" id="em-alta">
      <div className="container">

        <Reveal
          as="div"
          className="trending__header"
        >
          <span className="trending__badge">
            EM ALTA AGORA
          </span>

          <h2 className="trending__title">
            O que está <span>bombando!</span>
          </h2>
        </Reveal>

        <Reveal
  as="div"
  className="trending__categories"
>

  <button
    className={category === "Destaques" ? "active" : ""}
    onClick={() => setCategory("Destaques")}
  >
    Destaques
  </button>

  <button
    className={category === "Filmes" ? "active" : ""}
    onClick={() => setCategory("Filmes")}
  >
    Filmes
  </button>

  <button
    className={category === "Séries" ? "active" : ""}
    onClick={() => setCategory("Séries")}
  >
    Séries
  </button>

  <button
    className={category === "Novelas" ? "active" : ""}
    onClick={() => setCategory("Novelas")}
  >
    Novelas
  </button>

  <button
    className={category === "Animes" ? "active" : ""}
    onClick={() => setCategory("Animes")}
  >
    Animes
  </button>



</Reveal>

       <Reveal
  as="div"
  className="trending__grid"
>

  {filteredMovies.length > 0 ? (

    filteredMovies.map((movie) => (

      <div
        key={movie.id}
        className="movie"
      >

        <span className="movie__badge">
          Em Alta
        </span>

        <img
          src={movie.image}
          alt={movie.title}
        />

        <h3>{movie.title}</h3>

      </div>

    ))

  ) : (

    <div className="trending__empty">

      <h3>
        Conteúdo em breve
      </h3>

      <p>
        Estamos preparando novos destaques para esta categoria.
        Volte em breve para conferir as novidades.
      </p>

    </div>

  )}

</Reveal>

        <Reveal
          as="div"
          className="trending__button"
        >
          <a href="#conteudos">
            VER TODOS CONTEÚDOS
            <ArrowRight size={18} />
          </a>
        </Reveal>

      </div>
    </section>
  );
};

export default Trending;