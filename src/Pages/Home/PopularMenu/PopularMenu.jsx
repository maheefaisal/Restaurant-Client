import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { key } from "localforage";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <>
      <section className="mb-12">
        <SectionTitle
          heading="from our menu"
          subHeading="popular menu"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <button className="btn btn-outline text-black border-0 border-b-4 border-l-4 ">View Full Menu</button>
        </div>

      </section>

    </>
  );
};

export default PopularMenu;
