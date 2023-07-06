import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppRoute from "./Route/AppRoute";
import routes from "./Route/Routes";
import Notfound from "./Common/Notfound/Notfound";
import CommonSpin from "./Common/Loaders/CommonSpin";
import "./App.scss";

import * as Sentry from "@sentry/react"; // false or branch name of process.cwd()
import { hideSessionExpiredModal } from "./utills/SessionExpiredModal";
import { Button, Modal } from "antd";
// const branchName = require('current-git-branch');

// console.log("branchName", process.cwd(branchName()));
console.log("process.env.REACT_APP_DSN", process.env.REACT_APP_DSN);
Sentry.init({
  dsn: process.env.REACT_APP_DSN,
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
// import React, { useState } from 'react';
// import './Notification.css';

function App() {
  useEffect(() => {
    hideSessionExpiredModal();
  }, []);
  const handleLoginClick = () => {
    hideSessionExpiredModal();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div id="SessionExpiredModal">
        <div className="session-expired-modal">
          <div className="modal-content">
            <h2>Session Expired</h2>
            <p>Your session has expired. Please log in again.</p>
            <button className="login-button" onClick={handleLoginClick}>
              Log In
            </button>
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          // <Spin size="large" />
          <CommonSpin size="large" />
        }
      >
        <Router>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                isPublic={route.isPublic}
                exact={route.exact}
              />
            ))}
            {/* <Route path='/videoCall/:pathParam?/:pathParam?' component={() => {
    window.location.href = '/videoCall/:pathParam?/:pathParam';
    return null;
}}/> */}
            <Route exact path="/404" component={Notfound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
