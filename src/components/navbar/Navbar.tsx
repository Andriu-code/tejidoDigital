import { useState, useEffect } from "react";
import logo from "../../assets/logo-web.jpeg";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#inicio">
            <img src={logo} alt="Vendrix logo" className="navbar-logo-img" />
          </a>

        </div>

        {isMobile ? (
          <>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              ☰
            </button>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <ul className="nav-links-mobile">
                <li>
                  <a href="#inicio" onClick={toggleMenu}>
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#productos" onClick={toggleMenu}>
                    Demos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" onClick={toggleMenu}>
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={toggleMenu}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={toggleMenu}>
                    Quiero cotizar!
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <ul className="nav-links">
              <li>
                <a href="#inicio">Servicios</a>
              </li>
              <li>
                <a href="#productos">Demos</a>
              </li>
              <li>
                <a href="#beneficios">Testimonios</a>
              </li>
              <li>
                <a href="#contacto">FAQ</a>
              </li>
              <li>
              </li>
            </ul>
            <button className="btn-Cotizar" onClick={() => toggleMenu}>
              Quiero cotizar!
            </button>
          </>
        )}
      </nav>
    </>
  );
};
