
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
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
            <SectionTitle heading={"Todays offer"}
                subHeading={"Don't Miss"}></SectionTitle>
            <MenuCategory items={offered}>  </MenuCategory>
            <MenuCategory
                items={dessert}
                title={"deserts"}
                img={"https://i.ibb.co/Bq61ghm/dessert-bg.jpg"}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={"https://i.ibb.co/bHXXr69/pizza-bg.jpg"}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title={"salad"}
                img={"https://i.ibb.co/bHXXr69/pizza-bg.jpg"}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title={"soup"}
                img={"https://i.ibb.co/bHXXr69/pizza-bg.jpg"}
            ></MenuCategory>
        </>
    );
};

export default Menu;