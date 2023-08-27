import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured />
      <ChefRecomends />
    </>
  );
};

export default Home;
