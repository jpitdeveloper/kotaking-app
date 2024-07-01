import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filterdItems, setFilterdItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilterdItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    // call the function
    fetchData();
  }, []);

  // filtering data based on category
  const filterItems = (category) => {
    const filterd =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilterdItems(filterd);
    setSelectedCategory(category);
  };

  // show all data function
  const showAll = () => {
    setFilterdItems(menu);
    setSelectedCategory("all");
  };

  // sorting based on A-Z, Z-A, Low-High Pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filterdItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
      break;
    }

    setFilterdItems(sortedItems);
  };

  return (
    <>
      <div className="banner">
        <div className="cat">
          <h1>
            Browse All Of Our <span> Menu</span>
          </h1>
          <p>
            Relax and get your sphatlho delivered to your door or come to
            collect, your choice.
          </p>
          <button className="cat-button">Order Now</button>
        </div>
      </div>

      {/* menu section */}
    </>
  );
};

export default Menu;
