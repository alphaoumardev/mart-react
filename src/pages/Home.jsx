import React from "react";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home=()=>
{
    return(
        <div>
            <Announcement/>
            <Nav/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Home
