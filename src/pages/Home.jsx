import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
