import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const CartContext = React.createContext();

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <CartContext.Provider value={showCartHandler}>
        <Header />
      </CartContext.Provider>
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
export {CartContext};
