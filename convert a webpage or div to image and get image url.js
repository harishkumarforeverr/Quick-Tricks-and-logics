in html
 <div id="harish">
 ...... 1000 lines of html code
 </div>
 
 <button onClick={convertToImage}>convertToImage</button>
 
 
 
 ///////////////////////////////////////////////////////////////////////
 
import html2canvas from "html2canvas"; 
import { getApp, getApps, initializeApp } from "firebase/app";
// import React,{useState,useEffect} from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCbn15UJcYvwObm0OryOyXWaqmXrslj4Ec",
  authDomain: "upload-documents-3f71b.firebaseapp.com",
  projectId: "upload-documents-3f71b",
  storageBucket: "upload-documents-3f71b.appspot.com",
  messagingSenderId: "931839699207",
  appId: "1:931839699207:web:42b9eb7b27b5e6ae78fda2",
  measurementId: "G-PWBCJMX6ZH",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

  const handleChange = (uploadfile) => { 
    if (uploadfile) {
      setUrl("");
      const storageRef = ref(storage, `images/${uploadfile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, uploadfile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log("downloadURL", downloadURL);
          });
        }
      );
    }
  };
  
  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

   const convertToImage = () => {
    html2canvas(document.getElementById("harish")).then(function (canvas) {
      var jpegUrl = canvas.toDataURL("image/jpeg");
      var blob = dataURLtoBlob(jpegUrl);
      handleChange(blob);
    });
  };
  
  
  
  
  
