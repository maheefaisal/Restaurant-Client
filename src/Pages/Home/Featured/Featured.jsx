import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Featured.css";
const Featured = () => {
  return (
    <>
      <div className="featured-item rounded-xl mt-12 mb-6 pt-2 bg-fixed">
        <SectionTitle
          heading=" Future Item "
          subHeading=" check it out"
        ></SectionTitle>

        <div className="md:flex justify-center items-center py-20 px-40">
          <div className="">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/tQ7ZmtL/featured.jpg"
              alt="featured image"
            />
          </div>
          <div className="md:ml-10 text-white ">
            <p>Aug 27,2023</p>
            <p className="uppercase">Where can i get some?</p>
            <p className="text-white text-justify ">
              Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal, or fungal origin and
              contains essential nutrients such as carbohydrates, fats,
              proteins, vitamins, or minerals. The substance is ingested by an
              organism and assimilated by the organism's cells to provide
              energy, maintain life, or stimulate growth.
              
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4 ">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
