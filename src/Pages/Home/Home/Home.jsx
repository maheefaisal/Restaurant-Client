import Banner from "../Banner/Banner";
import Callus from "../Callus/Callus";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import Moto from "../Moto/Moto";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <Moto />
      <PopularMenu></PopularMenu>
      <Callus />
      <ChefRecomends />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
