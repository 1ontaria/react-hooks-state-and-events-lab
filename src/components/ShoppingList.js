import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // create a useState hook
  // name state variable selectedCategory
  // filter through items array to show items based on category (selectedCategory)

  const [selectedCategory, setSelectedCategory] = useState("All");

  function filterFood(event) {
    setSelectedCategory(event.target.value);
  }

  const foodsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterFood}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
