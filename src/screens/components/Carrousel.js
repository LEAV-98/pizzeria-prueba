import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
export const Carrousel = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      dynamicHeight={true}
      showStatus={false}
    >
      <div className="carrousel-item ct1 ">
        <div className="carrousel-info animate__animated  animate__bounce">
          <>
            <h1 className="carrousel-title">
              Bienvenidos a la Pizzeria - piensen un name :v
            </h1>
          </>
        </div>
      </div>
      <div className="carrousel-item ct2">
        <div className="carrousel-info ">
          <Link to="/products" className="carrousel-title">
            <h1>Presiona aqui para ver nuestros productos</h1>
          </Link>
        </div>
      </div>
      <div className="carrousel-item ct3">
        <div className="carrousel-info">
          <Link to="/" className="carrousel-title">
            <h1>¿Quieres Saber más de nosotros? </h1>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};
