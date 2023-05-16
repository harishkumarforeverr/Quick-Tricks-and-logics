// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3
// https://stackoverflow.com/questions/25711895/the-result-by-haversine-formula-is-meter-o-kmeter

function getDistanceFromLatLonInKm({lat1,lon1,lat2,lon2}) {
  // var R = 6371; // Radius of the earth in km
  var R = 3958.756; // Radius of the earth in miles
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in miles
  return d.toFixed(2)+" miles";
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
 
// [-118.131414, 34.155373]
// [-122.158239, 37.451026]
getDistanceFromLatLonInKm({lat1:-118.131414,lon1:34.155373,lat2:-122.158239,lon2:37.451026})
