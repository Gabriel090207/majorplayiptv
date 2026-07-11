import "./Header.css";
import Logo from "../../assets/logo.png";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Bloqueia o scroll quando a sidebar estiver aberta
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header__container">

          <button
            className="header__menuButton"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>

          <a href="#inicio" className="header__logo">
            <img src={Logo} alt="Major Play IPTV Premium" />
          </a>

          <nav className="header__nav">
            <a href="/">Início</a>
            <a href="#planos">Planos</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="/tutoriais">Tutoriais</a>
            <a href="#download">Download</a>
            <a href="#em-alta">Em Alta</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
            <a href="/revendedores">Revendedores</a>
          </nav>

          <a href="#teste" className="header__button">
            TESTE GRÁTIS
          </a>

        </div>
      </header>

      <div
        className={`header__overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`header__sidebar ${menuOpen ? "active" : ""}`}>

        <div className="header__sidebarHeader">

          <a href="#inicio" className="header__sidebarLogo">
            <img src={Logo} alt="Major Play IPTV Premium" />
          </a>

          <button
            className="header__sidebarClose"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>

        </div>

        <nav className="header__sidebarNav">

          <a href="/" onClick={() => setMenuOpen(false)}>Início</a>

          <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>

          

          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como Funciona</a>

          <a href="/tutoriais" onClick={() => setMenuOpen(false)}>Tutoriais</a>

          <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>

          <a href="#em-alta" onClick={() => setMenuOpen(false)}>Em Alta</a>

          <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>

          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

          <a href="/revendedores" onClick={() => setMenuOpen(false)}>Revendedores</a>

        </nav>

      </aside>
    </>
  );
};

export default Header;