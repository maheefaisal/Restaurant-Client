
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import BreadCrumbs from '../../Shared/BreadCrumbs/BreadCrumbs';

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Resturant | Menu</title>
            </Helmet>
            <Cover
                img={'https://i.ibb.co/ftWXPmq/banner3.jpg'}
                title={'our menu'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>
    
            <PopularMenu></PopularMenu>
            <Cover
                img={'https://i.ibb.co/ftWXPmq/banner3.jpg'}
                title={'our menu'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>
    
            <PopularMenu></PopularMenu>
            <Cover
                img={'https://i.ibb.co/ftWXPmq/banner3.jpg'}
                title={'our menu'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>
    
            <PopularMenu></PopularMenu>
        </>
    );
};

export default Menu;