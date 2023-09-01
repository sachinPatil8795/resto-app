import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const ModalCartContext = React.createContext();

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <ModalCartContext.Provider value={showCartHandler}>
        <Header />
      </ModalCartContext.Provider>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
export { ModalCartContext };
