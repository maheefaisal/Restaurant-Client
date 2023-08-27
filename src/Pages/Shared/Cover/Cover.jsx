import { Parallax } from 'react-parallax';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

// eslint-disable-next-line react/prop-types
const Cover = ({ img, title, subTitle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >

                <div className="hero h-[600px]" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{subTitle}</p>
                            <BreadCrumbs
                                to={'Menu'}></BreadCrumbs>

                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;