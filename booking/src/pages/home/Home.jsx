import React from "react";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MainList from "../../components/mainList/MainList";

const Home =()=>{
    return(
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests</h1>
        <FeaturedProperties />
        <MainList />
        </div>
      </div>
    )
}

export default Home