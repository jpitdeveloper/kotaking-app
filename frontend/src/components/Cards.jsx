import React from "react";
import { Star } from "lucide-react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="popular-menu-cards-wrapper">
      <div className="menu-card">
        <div className="menu-img">
          <Link to={`/menu/${item._id}`}>
            <figure>
              <img src={item.image} alt="" />
            </figure>
          </Link>
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
