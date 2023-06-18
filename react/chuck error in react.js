window.addEventListener("error", (e) => {
  // prompt user to confirm refresh
  if (/Loading chunk [\d]+ failed/.test(e.message)) {  
    window.history.pushState({}, "", "/");
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  if (/Loading( CSS)? chunk [\d]+ failed/.test(e.message)) {
    window.history.pushState({}, "", "/");
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
});
