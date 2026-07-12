import "./CTA.css";

import { Gift, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta">

      <div className="container cta__container">

        <div className="cta__left">

          <div className="cta__gift">
            <Gift size={34} />
          </div>

          <div>

            <h2>Teste grátis por 6 horas!</h2>

            <p>
              Experimente agora e comprove a qualidade
              do nosso serviço.
            </p>

          </div>

        </div>

        <a
          href="#"
          className="cta__button"
        >

          QUERO TESTAR AGORA

          <ArrowRight size={18} />

        </a>

      </div>

    </section>
  );
};

export default CTA;