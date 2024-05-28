import { useState } from 'react';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
// this is the REACT CONTEXT API USED TO SHARE DATA ACROSS ALL THE FILES
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
    // <CartContext.Provider value={{items:[]}}>
    <CartContextProvider>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart}>

        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
