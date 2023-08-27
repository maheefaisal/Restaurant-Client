import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured />
    </>
  );
};

export default Home;
