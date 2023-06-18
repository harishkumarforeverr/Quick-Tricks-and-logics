  useEffect(() => {
    var url = `${CommonBaseurl}/insurance/v1.0/getInsurances`;
    var request = new Request(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        //'x-access-token': sessionStorage.token
      },
    });
    fetch(request)
      .then((response) => response.json())
      .then(function (response) {
        // if (response.status == 200) {
        console.log("response", response.data);
        // }
      });
  }, []);
