##########################################################################creating the slice ##########################################################################

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DiagnosisApiRequest } from "../../../services/Diagnosis";

export const fetchbookings = createAsyncThunk(
  "fetch/bookings",
  async ({ userid, radiovalue }) => {
    console.log("inside the fetchbookins", userid, radiovalue);
    try {
      const response = await DiagnosisApiRequest.getBookings(
        userid,
        radiovalue
      );
      if (response.status === 200) {
        return response?.data?.data;
      } else {
        console.log(response?.error);
      }
    } catch (error) {
      return error;
    }
  }
);

export const fetchreportdetails = createAsyncThunk(
  "fetch/bookingreport",
  async (bookingid) => {
    console.log("inside the fetch report details", bookingid);
    try {
      const response = await DiagnosisApiRequest.getBookingReport(bookingid);
      if (response.status === 200) {
        return response?.data?.data;
      } else {
        console.log(response.error);
      }
    } catch (error) {
      return error;
    }
  }
);

const Diagnosisbookings = createSlice({
  name: "diagnosisbooking",
  initialState: {
    diagnosisbooking: [],
    bookingreport: {},
    error: null,
    loading: false,
  },

  extraReducers: {
    [fetchbookings.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchbookings.fulfilled]: (state, action) => {
      state.loading = false;
      state.diagnosisbooking = action.payload;
    },
    [fetchbookings.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchreportdetails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchreportdetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookingreport = action.payload;
    },
    [fetchreportdetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default Diagnosisbookings.reducer;



##########################################################################creating the slice ##########################################################################
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   DiagnosisBooking: DiagnosisBooking,
});

export default rootReducer;
##########################################################################creating the reducer ##########################################################################




import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// const middlewares = [thunk];
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const configure = (modules) => {
  const store = createStore(modules, applyMiddleware(thunk)); 
  return store;
};

const store = configure(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };



##########################################################################creating the index ##########################################################################

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";
import App from "./App";
import "./i18n";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store";
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
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


