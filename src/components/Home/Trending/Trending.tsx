import "./Trending.css";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { trending } from "../../../data/trending";

const Trending = () => {
  return (
    <section className="trending" id="em-alta">

      <div className="container">

        <div className="trending__header">

          <span className="trending__badge">
            EM ALTA AGORA
          </span>

          <h2 className="trending__title">
            O que está <span>bombando!</span>
          </h2>

        </div>

        <div className="trending__categories">

          <button className="active">Destaques</button>
          <button>Filmes</button>
          <button>Séries</button>
          <button>Novelas</button>
          <button>Animes</button>
          <button>Esportes</button>

        </div>

        <div className="trending__slider">

          <button className="slider-prev">
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={6}
            navigation={{
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >
            {trending.map((movie) => (
              <SwiperSlide key={movie.id}>

                <div className="movie">

                  <span className="movie__badge">
                    Em Alta
                  </span>

                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <h3>{movie.title}</h3>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <button className="slider-next">
            <ChevronRight size={22} />
          </button>

        </div>

        <div className="trending__button">

          <a href="#conteudos">

            VER TODOS CONTEÚDOS

            <ArrowRight size={18} />

          </a>

        </div>

      </div>

    </section>
  );
};

export default Trending;