// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-6 ">
            {title && <Cover
                img={img}
                title={title}
                subTitle={'Would you like to try a dish?'}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {items.map(item => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <Link to={`/order/${title}`} >
                <div className="flex flex-col items-center mb-4 mt-4">
                    <button className="btn btn-outline bg-slate-400 text-black border-0 border-b-4 ">Order Now</button>

                </div>

            </Link>
        </div>
    );
};

export default MenuCategory;