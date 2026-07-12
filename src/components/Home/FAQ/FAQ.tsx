import "./FAQ.css";
import Reveal from "../../../components/Reveal/Reveal";

import { useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";

import { faq } from "../../../data/faq";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="faq" id="duvidas">
      <div className="container-sm">

        <Reveal
          as="div"
          className="faq__header"
        >
          <span className="faq__badge">
            DÚVIDAS FREQUENTES
          </span>

          <h2 className="faq__title">
            Tire suas principais <span>dúvidas</span>
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="faq__list"
        >
          {faq.map((item, index) => {

            const active = open === item.id;

            return (

              <div
                key={item.id}
                className={`faq__item ${active ? "active" : ""}`}
              >

                <button
                  className="faq__question"
                  onClick={() => toggleFAQ(item.id)}
                >

                  <span>{item.question}</span>

                  <div className="faq__icon">

                    <Plus
                      size={20}
                      className={`faq__plus ${active ? "hide" : ""}`}
                    />

                    <Minus
                      size={20}
                      className={`faq__minus ${active ? "show" : ""}`}
                    />

                  </div>

                </button>

                <div
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className="faq__content"
                  style={{
                    maxHeight: active
                      ? `${refs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                >

                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>

                </div>

              </div>

            );

          })}
        </Reveal>

      </div>
    </section>
  );
};

export default FAQ;