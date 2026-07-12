import "./CTA.css";

import { Handshake, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta">

      <div className="container cta__container">

        <div className="cta__left">

          <div className="cta__gift">
            <Handshake size={34} />
          </div>

          <div>

            <h2>Comece agora e transforme sua conexão em uma fonte de renda!</h2>

            <p>
              Torne-se um revendedor MajorPlay e aumente sua renda com um serviço de alta qualidade.
            </p>

          </div>

        </div>

        <a
          href="#"
          className="cta__button"
        >
          QUERO SER REVENDEDOR

          <ArrowRight size={18} />
        </a>

      </div>

    </section>
  );
};

export default CTA;