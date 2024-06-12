import React from "react";
import "./Categories.css";
import categoryImg from "../../assets/images/category.png";

const Category = () => {
  return (
    <>
      <div className="category-section">
        <h2>Popular Category</h2>
        <div className="category-cards-wrapper">
          <div className="category-card">
            <img src={categoryImg} alt="category-image" />
            <h4>Sphatlho</h4>
            <p>(12 Varients)</p>
          </div>
          <div className="category-card">
            <img src={categoryImg} alt="category-image" />
            <h4>Potato fries</h4>
            <p>(3 Varients)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
