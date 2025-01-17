import React from "react";
import "./Categories.css";

const categoryItems = [
  {
    id: 1,
    title: "Sphatlho",
    des: "(12 Varients)",
    image: "/images/home/category/sphatlho.png",
  },
  {
    id: 2,
    title: "Burger",
    des: "(8 Varients)",
    image: "/images/home/category/burger.png",
  },
  {
    id: 3,
    title: "Potato Fries",
    des: "(3 Varients)",
    image: "/images/home/category/potato-fries.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(80 Items)",
    image: "/images/home/category/browse-all.png",
  },
];

const Category = () => {
  return (
    <>
      <h2>Popular Category</h2>
      <div className="categories-card-wrapper">
        {categoryItems.map((item, i) => (
          <div className="categories-card" key={i}>
            <div className="image-bg">
              <img src={item.image} alt="category-image" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
