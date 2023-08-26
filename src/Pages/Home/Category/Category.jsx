import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
        heading={"From11.00 am to 11.0 pm"}
        subHeading={"Order Online"}
        >

        </SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-[100px]">
            <div className="relative">
              <img src="https://i.ibb.co/v4QTBMT/slide1.jpg" alt="" />
              <div className="absolute rounded-sm  top-0 left-0  p-2 bg-black opacity-40 ">
                <h1 className="text-white">0</h1>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/xsm0hnB/slide2.jpg" alt="" />
              <div className="absolute rounded-lg  top-0 left-0    p-2 bg-black opacity-40 ">
                <span className="text-white">1</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/xmSvD7M/slide3.jpg" alt="" />
              <div className="absolute rounded-lg  top-0 left-0    p-2 bg-black opacity-40 ">
                <span className="text-white">2</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src="https://i.ibb.co/Rg70b4G/slide4.jpg" alt="" />
              <div className="absolute rounded-lg  top-0 left-0    p-2 bg-black opacity-40 ">
                <span className="text-white">3</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/5hDy04x/pexels-dapur-melodi-1109197.jpg"
                alt=""
              />
              <div className="absolute rounded-lg  top-0 left-0    p-2 bg-black opacity-40 ">
                <span className="text-white">4</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/tPT2JZC/pexels-william-choquette-2641886.jpg"
                alt=""
              />
              <div className="absolute rounded-lg  top-0 left-0    p-2 bg-black opacity-40 ">
                <span className="text-white">5</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/2gzmW6Y/pexels-valeria-boltneva-842571.jpg"
                alt=""
              />
              <div className="absolute rounded-lg  top-0 left-0   p-2 bg-black opacity-40 ">
                <span className="text-white">6</span>
              </div>
              <h1 className="text-4xl text-center -mt-20 -ml-6 text-white ">
                Fruit Salad
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
