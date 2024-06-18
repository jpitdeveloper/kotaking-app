import React from "react";
import { Link, Star } from "lucide-react";
import "./Cards.css";
import categoryImg from '../assets/images/home/category/sphatlho.png'

const Cards = ({ item }) => {
  return (
    <div className="popular-menu-cards-wrapper">
      {/* <Link to={`/menu/${item._id}`}>
        <figure>
          <img src={item.image} alt="" />
        </figure>
      </Link> */}
      <div className="menu-card">
        <div className="menu-img">
          <img src={categoryImg} alt="menu-image" />
        </div>
        <div className="menu-info">
          <h3 className="menu-title">{item.name}</h3>
          <p className="menu-description">{item.recipe}</p>
        </div>
        <div className="price-rating-wrapper">
          <p className="price">
            <strong>
              <span className="currency">R</span>
              {item.price}
            </strong>
          </p>
          <div className="rating-stats">
            <Star className="rating-star" />
            <p>4.4</p>
          </div>
        </div>
        <div className="buy-buttons">
          <button className="buy-now-button">Order Now</button>
          <button className="add-to-card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
