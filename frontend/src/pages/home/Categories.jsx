import React from "react";
import "./Categories.css";
import categoryImg from "../../assets/images/category.png";

const Category = () => {
  return (
    <>
      <h2>Popular Category</h2>
      <div className="categories-card-wrapper">
        <div className="categories-card">
          <img src={categoryImg} alt="category-image" />
          <h4>Sphatlho</h4>
          <p>(12 Varients)</p>
        </div>
        <div className="categories-card">
          <img src={categoryImg} alt="category-image" />
          <h4>Burger</h4>
          <p>(8 Varients)</p>
        </div>
        <div className="categories-card">
          <img src={categoryImg} alt="category-image" />
          <h4>Potato Fries</h4>
          <p>(3 Varient)</p>
        </div>
        <div className="categories-card">
          <img src={categoryImg} alt="category-image" />
          <h4>Hot Dog</h4>
          <p>(4 Varients)</p>
        </div>
        <div className="categories-card">
          <img src={categoryImg} alt="category-image" />
          <h4>Fat Cake</h4>
          <p>(1 Varient)</p>
        </div>
      </div>
    </>
  );
};

export default Category;
