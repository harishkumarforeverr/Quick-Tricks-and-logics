// sender code

  const updatedReportData = {
    tests:123,
    id: {name : harish},
  };
  let str = JSON.stringify(updatedReportData);
  let l = str.length;
  let convert = "";
  for (let i = 0; i < l; i += 1) {
    convert += str[i].charCodeAt(0);
  }
  const url = `https://pdf-genarator-diagosis.vercel.app/id=${convert}`;
  
  
  
  
  
  /// reciver code

const PDFDownloadLinkGenrator = ({ id }) => {
  let parseData;
  id = String(id);
  id = id?.slice(3);
  console.log("sssssssssssss", id);
  let decodeStr = "";
  function asciiToSentence(str, len) {
    var num = 0;
    for (var i = 0; i < len; i++) {
      num = num * 10 + (str[i] - "0");
      if (num >= 32 && num <= 127) {
        var ch = String.fromCharCode(num);
        decodeStr += ch;
        num = 0;
      }
    }
  }
  asciiToSentence(id, id.length);
  try {
    parseData = JSON.parse(decodeStr);
    console.log("decodeStr", JSON.parse(decodeStr));
    console.log("parseData", parseData);
  } catch (e) {
    parseData = [];
    console.log("something went wrong");
  }
}
