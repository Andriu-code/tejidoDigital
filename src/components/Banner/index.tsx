import bodega from "../../assets/banner_digital.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <img src={bodega} alt="bodega" />
      <div className="banner-text">
        <h1>Convierte tus ideas en realidad a través de código</h1>
        <a href="#productos" className="btn btn-accent">Contáctanos</a>
      </div>
    </div>
  );
};

export default Banner;