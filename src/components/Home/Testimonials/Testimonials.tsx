import "./Testimonials.css";
import Reveal from "../../../components/Reveal/Reveal";

import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <Reveal
          as="div"
          className="testimonials__header"
        >
          <span className="testimonials__badge">
            4.9/5 BASEADO EM CLIENTES
          </span>

          <h2 className="testimonials__title">
            O que nossos <span>clientes dizem</span>
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="testimonials__slider"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial">

                  <Quote
                    className="testimonial__quote"
                    size={34}
                  />

                  <div className="testimonial__stars">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="#E50914"
                      />
                    ))}
                  </div>

                  <p className="testimonial__text">
                    {item.text}
                  </p>

                  <div className="testimonial__user">
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

      </div>
    </section>
  );
};

export default Testimonials;