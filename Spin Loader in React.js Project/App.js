import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"; 
import "./App.scss";
import { useEffect } from "react";
import { hideLoader } from "./utills/loaderUtils";
const App = () => {
  useEffect(() => {
    hideLoader();
  }, []);
  return (
    <div>
      <div className="loaderSpinner">
        <div id="loader" className="loader-container">
          <div className="loader"></div>
        </div>
      </div> 
      {/* <Your Components /> */}
    </div>
  );
};

export default App;
