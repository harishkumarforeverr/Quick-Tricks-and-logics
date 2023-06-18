// useContext is a feature in React, a popular JavaScript library for building user interfaces. It allows you to share data or state across multiple components without the need for prop drilling, where data is passed down through several layers of components.

// In simple terms, useContext provides a way to create a global state that can be accessed and updated by any component in your React application. It eliminates the need to pass props through intermediate components that don't need the data, making your code cleaner and more efficient.

// A good and simple real-time example of useContext can be seen in a shopping cart application. Imagine you have a shopping cart component that displays the items added by the user. You also have several other components like product list, product details, and checkout, which need access to the shopping cart data.

// By using useContext, you can create a ShoppingCartContext that holds the state of the shopping cart. This context can be accessed by any component that needs to read or modify the cart data. For instance, the product list component can read the cart data to display the number of items already added, and the product details component can use the context to add items to the cart.

// Here's a simplified example:

// ```jsx
import React, { createContext, useContext, useState } from "react";

// Create a context for the shopping cart
const ShoppingCartContext = createContext();

// ShoppingCartProvider component to wrap the application and provide the context
const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Helper function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Value object to be provided in the context
  const value = {
    cartItems,
    addToCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// ProductList component that displays the product list
const ProductList = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Product List</h2>
      <p>Items in cart: {cartItems.length}</p>
      {/* Product list rendering */}
    </div>
  );
};

// ProductDetails component that displays the product details
const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

// App component that uses the ShoppingCartProvider and renders the application
const App = () => {
  return (
    <ShoppingCartProvider>
      <ProductList />
      {/* Other components */}
    </ShoppingCartProvider>
  );
};

export default App;
// ```

// In the above example, the ShoppingCartProvider wraps the application and provides the shopping cart context with the current cart items and the addToCart function. The ProductList component and the ProductDetails component both access the context using useContext hook. The ProductList component displays the number of items in the cart, while the ProductDetails component adds items to the cart when the "Add to Cart" button is clicked.

// This way, the shopping cart data can be accessed and modified by any component in the application without the need for passing props explicitly.

// ?###### simple example done by me
// import React, { useState, useEffect, useContext, createContext } from "react";

// const store = createContext();

// const ReadTheData = () => {
//   const { value } = useContext(store);
//   return value;
// };
// const UpdateTheDate = () => {
//   const { dispatch } = useContext(store);
//   return (
//     <button
//       onClick={() => {
//         dispatch(Math.random());
//       }}
//     >
//       {" "}
//       increment{" "}
//     </button>
//   );
// };

// const App = () => {
//   const [value, dispatch] = useState(0);
//   return (
//     <store.Provider value={{ value, dispatch }}>
//       <ReadTheData />
//       <UpdateTheDate />
//     </store.Provider>
//   );
// };

// export default App;
