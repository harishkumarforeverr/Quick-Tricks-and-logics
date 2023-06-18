// `useMemo` is a React Hook that allows you to optimize the performance of your components by memoizing the result of a computation. It helps to avoid unnecessary calculations or expensive operations when the dependencies haven't changed.

// Here's a simple explanation of how `useMemo` works:
// - `useMemo` takes two arguments: a function that performs the computation and an array of dependencies.
// - The function is executed only when one of the dependencies changes.
// - If the dependencies remain the same, `useMemo` returns the previously memoized value, saving computation time.

// Here's a complete example to illustrate its usage:

// ```jsx
import React, { useMemo, useState } from 'react';

const ExpensiveComponent = ({ value }) => {
  const expensiveResult = useMemo(() => {
    // Perform some expensive calculation here
    console.log('Calculating expensive result...');
    let result = value * 2;
    return result;
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent value={count} />
    </div>
  );
};

export default App;
// ```

// In this example, we have an `ExpensiveComponent` that receives a `value` prop. The `expensiveResult` is calculated using `useMemo` and depends on the `value` prop. Whenever the `value` changes, the expensive calculation is performed and the new result is memoized. If the `value` remains the same, the previously memoized result is returned, avoiding unnecessary computations.

// By using `useMemo` in this example, we ensure that the expensive calculation is only performed when necessary, optimizing the performance of our component.