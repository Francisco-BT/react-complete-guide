import { initStore } from "./store";

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

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currState, id) => {
      const prodIndex = currState.products.findIndex((p) => p.id === id);
      const newFavStatus = !currState.products[prodIndex].isFavorite;
      const updatedProducts = [...currState.products];
      updatedProducts[prodIndex] = {
        ...currState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        products: updatedProducts,
      };
    },
  };

  initStore(actions, { products: initialProducts });
};

export default configureStore;
