import "./Plans.css";
import Reveal from "../../../components/Reveal/Reveal";

import { Check } from "lucide-react";

import { plans } from "../../../data/plans";

const Plans = () => {
  return (
    <section className="plans" id="planos">
      <div className="container">

        <Reveal
          as="div"
          className="plans__header"
        >
          <span className="plans__badge">
            ESCOLHA SEU PLANO
          </span>

          <h2 className="plans__title">
            Planos que cabem no seu bolso
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="plans__grid"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan ${plan.featured ? "plan--featured" : ""}`}
            >
              {plan.featured && (
                <div className="plan__featured">
                  MAIS ESCOLHIDO
                </div>
              )}

              <span className="plan__name">
                {plan.name}
              </span>

              <div className="plan__price">
                <small>R$</small>

                <span className="plan__value">
                  {plan.price}
                </span>

                <span className="plan__period">
                  {plan.period}
                </span>
              </div>

              <ul>
                {plan.benefits.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <button>
                {plan.button}
              </button>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
};

export default Plans;