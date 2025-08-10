import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-container">
          <div className="footer-col">
            <h3>TEJIDO DIGITAL</h3>
            <p>
              Somos una empresa guatemalteca, especializada en ofrecer soluciones
              digitales para negocios de todos los tamaños.
            </p>
          </div>
          <div className="footer-col">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/share/16cNAc5byx/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>

              </a>
              <a href="https://www.instagram.com/vendrixgt/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@vendrixgt?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i> (502) 3600 6280{" "}
              </li>
              <li>
                <i className="fas fa-phone"></i> (502) 3637 1705
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>Ciudad de Guatemala,
                Guatemala
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                vendrixbienesyservicios@gmail.com
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                vendrixventasgt@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 TEJIDO DIGITAL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
