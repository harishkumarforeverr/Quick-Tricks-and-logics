https://bobbyhadz.com/blog/javascript-swap-object-key-and-value#:~:text=entries()%20method.,pair%20arrays%20into%20an%20object.


function swapKeysAndValues(obj) {
  // 👇️ [['color', 'blue'], ['fruit', 'apple']]
  const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(swapped);
}

// 👇️ {color: 'blue', fruit: 'apple'}
console.log(
  swapKeysAndValues({blue: 'color', apple: 'fruit'})
);




or 


function swapKeysAndValues(obj) {
  return Object.entries(obj).reduce((accumulator, entry) => {
    const [key, value] = entry;

    accumulator[value] = key;

    return accumulator;
  }, {});
}

// 👇️ {color: 'blue', fruit: 'apple'}
console.log(swapKeysAndValues({blue: 'color', apple: 'fruit'}));
