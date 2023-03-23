import { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  function addGroceries() {
    setAddCart((addCart) => !addCart);
  }

  const addedClass = addCart ? "in-cart" : "";

  return (
    <li className={addedClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addGroceries}>
        {addCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
