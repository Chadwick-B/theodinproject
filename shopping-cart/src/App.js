import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CartBtn from './components/CartBtn';
import Home from './views/Home';
import Products from './views/Products';
import ItemDetails from './views/ItemDetails';
import Contact from './views/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const checkCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (id, quantity) => {
    const isItemInCart = checkCart(id);
    if (!isItemInCart) {
      setCart([...cart, { id: id, quantity: quantity }]);
    } else {
      const newCart = cart.map((item) =>
        item.id === id ? { id: id, quantity: quantity } : item
      );
      setCart(newCart);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <HashRouter>
      <header>
        <Nav />
        <CartBtn
          items={cart}
          handleAdd={addToCart}
          handleRemove={removeFromCart}
        />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route
            path="/item/:id"
            render={(props) => (
              <ItemDetails {...props} checker={checkCart} handler={addToCart} />
            )}
          />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
