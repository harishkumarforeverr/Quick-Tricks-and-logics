  var request = new Request(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-auth": sessionStorage.getItem("auth"),
      },
    });

    fetch(request)
      .then((response) => response.json())
      .then((response) => {
        console.log("data", response);
        if (response.status === 200) {
          // secret = response.data;
          setSpin(false);
          setCardDetails(response.data);
        } else {
          const errMsg = response.message;
        }
      });
