import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import Ordertab from "../Ordertab/Ordertab";
import { useParams } from "react-router-dom";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const {category} = useParams()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
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