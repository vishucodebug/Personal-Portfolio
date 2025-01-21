import "../assets/CSS/Sec-10-Testimonials.css";
import Testimonials from "../shared/btns/Testimonials";
// import PerProject from "../shared/btns/PerProject.jsx";
import arrow from "../assets/images/arrow.png";

function Sec10Testimonials() {
  return (
    <div className="container Sec-10">
      <h2>Testimonials</h2>
      {/* Slider  */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <Testimonials
              name="Vishal Maurya"
              role="Web Developer (UP India)"
              review=" It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
              linkedInURL="#"
            />
          </div>
          <div className="carousel-item">
            <Testimonials
              name="Vishal Maurya"
              role="Web Developer (UP India)"
              review=" It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
              linkedInURL="#"
            />
          </div>
          <div className="carousel-item">
            <Testimonials
              name="Vishal Maurya"
              role="Web Developer (UP India)"
              review=" It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
              linkedInURL="#"
            />
          </div>
        </div>
        <div className="navigation-btn">
          {/* navigation button Pre */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="preArrow" aria-hidden="true">
              <img src={arrow} alt="pre Arrow" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          {/* navigation button Pre */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="nextArrow" aria-hidden="true">
              <img src={arrow} alt="pre Arrow" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sec10Testimonials;
