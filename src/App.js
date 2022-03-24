import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const showCarHandler = () => {
    setCarIsShown(true);
  };

  const hideCarHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCarHandler} />}
      <Header onShowCart={showCarHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
