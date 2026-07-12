import "./Footer.css";

import logo from "../../assets/logo.png";

import {
  Phone,
  Mail,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

    

      {/* ================= FOOTER ================= */}

      <div className="footer__main">

        <div className="container">

          <div className="footer__grid">

            {/* Logo */}

            <div className="footer__column">

              <img
                src={logo}
                alt="MajorPlay"
                className="footer__logo"
              />

              <p className="footer__text">
                A melhor experiência em entretenimento
                para você e sua família.
              </p>

              <div className="footer__social">

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* Navegação */}

            <div className="footer__column">

              <h4>NAVEGAÇÃO</h4>

              <a href="#inicio">Início</a>
              <a href="#planos">Planos</a>
              <a href="#como-funciona">Como Funciona</a>
              <a href="#tutoriais">Tutoriais</a>
              <a href="#download">Download</a>
              <a href="#em-alta">Em Alta</a>
              <a href="#duvidas">Dúvidas</a>
              <a href="#contato">Contato</a>

            </div>

            {/* Suporte */}

            <div className="footer__column">

              <h4>SUPORTE</h4>

              <a href="#">WhatsApp</a>
              <a href="#">Perguntas Frequentes</a>
              <a href="#">Tutoriais</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>

            </div>

            {/* Contato */}

            <div className="footer__column">

              <h4>FALE CONOSCO</h4>

              <div className="footer__contact">

                <Phone size={16} />
                <span>(11) 99999-9999</span>

              </div>

              <div className="footer__contact">

                <Mail size={16} />
                <span>contato@majorplay.com</span>

              </div>

              <div className="footer__contact">

                <FaWhatsapp />
                <span>Atendimento 24 horas</span>

              </div>

            </div>

          </div>

          <div className="footer__bottom">

            © 2025 MajorPlay IPTV. Todos os direitos reservados.

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;