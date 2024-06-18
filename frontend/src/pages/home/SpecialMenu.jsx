import React, { useEffect, useState } from "react";
import "./SpecialMenu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};
const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};

const SpecialMenu = () => {
  // import recipes from json
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipes(specials);
      });
  }, []);
  // slider settings
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
  };
  return (
    <div className="popular-menu-section">
      <div className="popular-menu-section-heading">
        <h2>Popular Menu</h2>
        <p>
          <span className="uppercase">Customer Favourites</span>
        </p>
      </div>
      {/* Popular Menu Slider */}
      <div className="slider-buttons">
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button onClick={() => slider?.current?.slickNext()}>Next</button>
      </div>
      <Slider ref={slider} {...settings}>
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialMenu;
