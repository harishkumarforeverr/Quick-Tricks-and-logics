// In React, `useState` is a hook that allows you to add state to functional components. It provides a way to store and update data within a component, and automatically re-renders the component when the state changes.

// Here's a simple explanation and example:

// Explanation:
// `useState` is a function that returns an array with two elements: the current state value and a function to update that state value. The first element is the current state value, which you can access and use in your component. The second element is the function you can call to update the state value.

// Example:
// Let's say you're building a counter component that increments a value when a button is clicked. You can use `useState` to store and update the count value.

// ```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increment the count when the button is clicked
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
// ```

// In the above example, we import the `useState` hook from the 'react' package. Inside the `Counter` component, we declare a state variable called `count` using `useState(0)`, where the initial value of `count` is set to 0.

// We also define an `increment` function that calls `setCount` with the updated value of `count + 1` whenever the button is clicked. This will trigger a re-render of the component with the updated `count` value.

// The current value of `count` is displayed in the paragraph element using `{count}`. Clicking the "Increment" button will update the count and display the updated value on the screen.

// This is a simple example of how `useState` can be used to add state to a functional component and handle updates in real time.