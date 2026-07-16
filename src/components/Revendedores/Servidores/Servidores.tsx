import "./Servidores.css";
import Reveal from "../../../components/Reveal/Reveal";
import { Check } from "lucide-react";
import { servidores } from "../../../data/servidores";

const Servidores = () => {
  const mensalistas = servidores.filter(
    (item) => item.category === "Mensalista"
  );

  const prepagos = servidores.filter(
    (item) => item.category === "Pré-pago"
  );

  const pospagos = servidores.filter(
    (item) => item.category === "Pós-pago"
  );

  return (
    <section className="servidores" id="servidores">
      <div className="container">

        <Reveal
          as="div"
          className="servidores__header"
        >
          <span className="servidores__badge">
            NOSSOS SERVIDORES
          </span>

          <h2 className="servidores__title">
            Escolha o melhor <span>servidor</span> para revender
          </h2>

          <p className="servidores__description">
            Trabalhamos com diversos servidores para atender todos os perfis de clientes.
          </p>
        </Reveal>

        <div className="servidores__lista">

          <div className="servidores__lista-card">

            <div className="servidores__coluna">
              <h3>Mensalistas</h3>

              <ul>
                {mensalistas.map((item) => (
                  <li key={item.id}>
                    <Check size={16} />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="servidores__coluna">
              <h3>Pré-pagos</h3>

              <ul>
                {prepagos.map((item) => (
                  <li key={item.id}>
                    <Check size={16} />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="servidores__coluna">
              <h3>Pós-pagos</h3>

              <ul>
                {pospagos.map((item) => (
                  <li key={item.id}>
                    <Check size={16} />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="servidores__button"
          >
            FALE CONOSCO
          </a>

        </div>

      </div>
    </section>
  );
};

export default Servidores;