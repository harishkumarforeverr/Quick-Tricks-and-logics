var arr = {};
arr["india"] = 7;
arr["indonesia"] = 3;
arr["usa"] = 1;

let sum = Object.keys(arr).reduce((s,k) => s += arr[k], 0);

var result = Object.keys(arr).map(k => ({[k] : (arr[k]/sum * 100).toFixed(2)}));

console.log(result);



/// output

[
  {
    "india": "63.64"
  },
  {
    "indonesia": "27.27"
  },
  {
    "usa": "9.09"
  }
]




/// link 

https://stackoverflow.com/questions/46783372/calculate-percentage-from-associative-array-in-js
