import "./Header.css";
import Logo from "../../assets/logo.png";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToSection = (section: string) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: section,
      },
    });
  };

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

          <Link
            to="/"
            className="header__logo"
          >
            <img
              src={Logo}
              alt="Major Play IPTV Premium"
            />
          </Link>

          <nav className="header__nav">

            <button onClick={() => goToSection("inicio")}>
              Início
            </button>

            <button onClick={() => goToSection("planos")}>
              Planos
            </button>

            <button onClick={() => goToSection("como-funciona")}>
              Como Funciona
            </button>

            <Link to="/tutoriais">
              Tutoriais
            </Link>

            <button onClick={() => goToSection("em-alta")}>
              Em Alta
            </button>

            <button onClick={() => goToSection("duvidas")}>
              Dúvidas
            </button>

            <Link to="/revendedores">
              Revendedores
            </Link>

          </nav>

          <button
            className="header__button"
            onClick={() => goToSection("teste")}
          >
            TESTE GRÁTIS
          </button>

        </div>
      </header>

      <div
        className={`header__overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`header__sidebar ${menuOpen ? "active" : ""}`}>

        <div className="header__sidebarHeader">

          <Link
            to="/"
            className="header__sidebarLogo"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={Logo}
              alt="Major Play IPTV Premium"
            />
          </Link>

          <button
            className="header__sidebarClose"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>

        </div>

        <nav className="header__sidebarNav">

          <button onClick={() => goToSection("inicio")}>
            Início
          </button>

          <button onClick={() => goToSection("planos")}>
            Planos
          </button>

          <button onClick={() => goToSection("como-funciona")}>
            Como Funciona
          </button>

          <Link
            to="/tutoriais"
            onClick={() => setMenuOpen(false)}
          >
            Tutoriais
          </Link>

          <button onClick={() => goToSection("em-alta")}>
            Em Alta
          </button>

          <button onClick={() => goToSection("duvidas")}>
            Dúvidas
          </button>

          <Link
            to="/revendedores"
            onClick={() => setMenuOpen(false)}
          >
            Revendedores
          </Link>

        </nav>

      </aside>
    </>
  );
};

export default Header;