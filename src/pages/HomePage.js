import React from "react";
import NavBar from '../components/NavBar'
import Home from "../components/HomePage/home";
import About from "../components/HomePage/about";
import Product from "../components/HomePage/product";
import Advantages from "../components/HomePage/advantage";
import Financial from "../components/HomePage/Financial";
import Team from "../components/HomePage/Team";
import Achievment from "../components/HomePage/Achievment";
import Support from "../components/HomePage/Support";
import Footer from "../components/Footer";
import Milestones from "../components/HomePage/Milestones";
const HomePage = () => {
    return(
        <>
            <NavBar/>
            <Home/>
            <About/>
            <Product/>
            <Advantages/>
            <Financial/>
            <Team/>
            <Achievment/>
            <Milestones/>
            <Support/>
            <Footer/>
        </>
    )
}

export default HomePage;