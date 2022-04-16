import React, { useState } from "react";

const initialProducts = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export default (props) => {
  const [products, setProducts] = useState(initialProducts);

  const toggleFavorite = (id) => {
    setProducts((currentProducts) => {
      const prodIndex = currentProducts.findIndex((p) => p.id === id);
      const newFavStatus = !currentProducts[prodIndex].isFavorite;
      const updatedProducts = [...currentProducts];
      updatedProducts[prodIndex] = {
        ...currentProducts[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products, toggleFavorite }}>
      {props.children}
    </ProductContext.Provider>
  );
};
