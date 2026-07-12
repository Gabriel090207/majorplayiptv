import "./Servidores.css";

import Reveal from "../../components/Reveal/Reveal";

import Servidores from "../../components/Revendedores/Servidores/Servidores";
import Vantagens from "../../components/Revendedores/Vantagens/Vantagens";
import CTA from "../../components/Revendedores/CTA/CTA";

const TodosServidores = () => {
  return (
    <>
      <main className="servers">

        <div className="container">

          <Reveal
            as="div"
            className="servers__header"
          >

            <span className="servers__badge">
              TODOS OS SERVIDORES
            </span>

            <h1 className="servers__title">
              Conheça todos os nossos
              <span> servidores</span>
            </h1>

            <p className="servers__description">
              Escolha o servidor ideal para oferecer aos seus clientes com
              estabilidade, qualidade e suporte especializado.
            </p>

          </Reveal>

        </div>

      </main>

      <Servidores
        footerButtonText="QUERO REVENDER"
        footerButtonHref="https://wa.me/5511999999999"
      />

      <Vantagens />

      <CTA />
    </>
  );
};

export default TodosServidores;