import React from "react";
import "./SpecialMenu.css";
import menuImg from "../../assets/images/menu.png";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SpecialMenu = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="popular-menu-section">
      <div className="popular-menu-section-heading">
        <h2>Popular Menu</h2>
        <p>
          <span className="uppercase">Customer Favourites</span>
        </p>
      </div>
      <div className="popular-menu-cards-wrapper">
        <div className="menu-card">
          <div className="menu-img">
            <img src={menuImg} alt="" />
          </div>
          <div className="menu-info">
            <h3 className="menu-title">French Palony Sphatlho</h3>
            <p className="menu-description">
              Quarter sliced Bread with Potato fries and:
            </p>
            <div className="menu-items">
              <li>French Palony</li>
            </div>
          </div>
          <div className="price-rating-wrapper">
            <p className="price">
              <strong>
                <span className="currency">R</span>17.99
              </strong>
            </p>
            <div className="rating-stats">
              <Star className="rating-star" />
              <p>4.4</p>
            </div>
          </div>
          <div className="buy-buttons">
            <button className="add-to-card-button">Add to Cart</button>
            <button className="buy-now-button">Order Now</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menuImg} alt="" />
          </div>
          <div className="menu-info">
            <h3 className="menu-title">French Palony Sphatlho</h3>
            <p className="menu-description">
              Quarter sliced Bread with Potato fries and:
            </p>
            <div className="menu-items">
              <li>French Palony</li>
            </div>
          </div>
          <div className="price-rating-wrapper">
            <p className="price">
              <strong>
                <span className="currency">R</span>17.99
              </strong>
            </p>
            <div className="rating-stats">
              <Star className="rating-star" />
              <p>4.4</p>
            </div>
          </div>
          <div className="buy-buttons">
            <button className="add-to-card-button">Add to Cart</button>
            <button className="buy-now-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
