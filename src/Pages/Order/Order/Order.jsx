import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import Ordertab from "../Ordertab/Ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>

            <Helmet>
                <title>Resturant | Order Food</title>
            </Helmet>
            <Cover
                img="https://i.ibb.co/zGYwbK4/order.jpg"

                title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <Ordertab items={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={pizza}></Ordertab>

                </TabPanel>
                <TabPanel>
                    <Ordertab items={soup}></Ordertab>

                </TabPanel>
                <TabPanel>
                    <Ordertab items={dessert}></Ordertab>

                </TabPanel>
                <TabPanel>
                    <Ordertab items={drinks}></Ordertab>


                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;