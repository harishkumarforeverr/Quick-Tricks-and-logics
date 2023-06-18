// `useLayoutEffect` is a hook in React that allows you to perform side effects that affect the layout of your components. It is similar to the `useEffect` hook, but it runs synchronously after all DOM mutations have been performed in the render phase.

// The primary use case for `useLayoutEffect` is when you need to interact with the DOM and make changes that affect the layout, such as measuring an element's size or position, manually manipulating the scroll position, or updating styles. Since it runs synchronously, any changes made in `useLayoutEffect` will be visible to the user before the browser has a chance to paint the screen, preventing any visual flickering.

// Here's a simple real-time example of using `useLayoutEffect`:

// ```jsx
import React, { useState, useLayoutEffect } from "react";

function App() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial width

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {width}px</h1>
    </div>
  );
}

export default App;
// ```

// In this example, we create a component called `App` that displays the current width of the window. We use `useLayoutEffect` to add an event listener to the window's `resize` event and update the `width` state whenever the window size changes. The `useLayoutEffect` hook runs only once (due to the empty dependency array `[]`), setting up the initial width and cleaning up the event listener when the component unmounts.

// By using `useLayoutEffect`, the width will be updated immediately after the resize event, ensuring that the UI remains responsive and the displayed width accurately reflects the current window size.
