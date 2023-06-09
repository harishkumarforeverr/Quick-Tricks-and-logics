
 
document.addEventListener("click", function (event) {
  setTimeout(() => {
    event = event || window.event;
    var target = event.target || event.srcElement;
    var text = target.textContent || target.innerText;

    const type = target.localName;
    if (type == "html") return;
    const location = event.view.location;
    const { pathname, href, origin } = location;
    const { appVersion, connection } = event.view.clientInformation;
    const str = `the user is currently in the ${pathname} path (router) and  user clicked on the ${text} and the type of the html tag is : ${type} and full url is ${href} and domain url is ${origin} and user browser info is : ${appVersion} and  user newtowk type is ${connection.effectiveType}`;
    console.log("GaEvent==>", str);
    // console.log("ssssssssswwwwww", target, event);
  }, 10);
});
