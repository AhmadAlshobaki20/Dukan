import imgOne from "../../Images/1.jpg";
import imgTwo from "../../Images/2.jpg";
import imgThree from "../../Images/3.jpg";
import imgFour from "../../Images/4.jpg";
import imgFive from "../../Images/5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Gallery() {
  return (
    <>
      <div className="card-title">
        <h1>المعرض</h1>
      </div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imgOne} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgTwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgThree} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgFour} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Gallery;
