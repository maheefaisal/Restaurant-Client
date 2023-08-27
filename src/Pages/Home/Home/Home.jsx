import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured />
      <ChefRecomends />
      <Testimonials/>
    </>
  );
};

export default Home;
