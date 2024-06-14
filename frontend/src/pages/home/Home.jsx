import React from "react";
import "./Home.css";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialMenu from "./SpecialMenu";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="banner-section">
        <Banner />
      </div>
      <div className="categories-section">
        <Categories />
      </div>
      <div className="specialMenu-section">
        <SpecialMenu />
      </div>
      <div className="services-section">
        <Services />
      </div>
    </>
  );
};

export default Home;
