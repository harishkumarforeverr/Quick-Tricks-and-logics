import moment from "moment";

// Write TypeScript code!
// const localDate = moment('2021-08-23 19:04:50');

let checkInDate = "2023-06-19T00:00:00.000Z";
let checkOutDate = "2023-06-23T00:00:00.000Z";

function getDates(date1, date2) {
  var _1Day = 24 * 3600 * 1000;
  for (
    var date = [], ms = date1 * 1, last = date2 * 1;
    ms < last;
    ms += _1Day
  ) {
    date.push(
      moment(ms).format("MM/DD/YYYY"),
      moment(ms + _1Day).format("MM/DD/YYYY")
    );
  }
  let a = [...new Set(date)];
  a.pop();
  return a;
}
let datesList = getDates(new Date(checkInDate), new Date(checkOutDate));
console.log(datesList);
