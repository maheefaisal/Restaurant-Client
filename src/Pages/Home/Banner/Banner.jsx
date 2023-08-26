import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/6brWQHN/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/JjrNvYG/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/8cKpqHc/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/4pSZtvN/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/M5NnWrh/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/DrrgNC0/06.png" />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
