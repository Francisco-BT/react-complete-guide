import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const showCarHandler = () => {
    setCarIsShown(true);
  };

  const hideCarHandler = () => {
    setCarIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCarHandler} />}
      <Header onShowCart={showCarHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
