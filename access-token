// Axois intercept  geeting the access token from the localStorage

import axios from "axios";
import baseUrl from "./config1" 

const Axiosinstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

Axiosinstance.interceptors.request.use(
  (config) => {
    console.log("config", config.headers);
    // config.headers["x-auth"] = localStorage.getItem("auth");
    config.headers["x-token"] = localStorage.getItem("x-token");
    config.headers["access-control-allow-origin"] = "*";
    return config;
  },
  (error) => {
    // Promise.reject(error)
  }
);

Axiosinstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error" && !error.response) {
      console.log("network error");
    }
    const { status, data, config } = error.response;
    console.log("Network>>>kkkkstatus", status);

    if (status === 401) {
      // createBrowserHistory().push('/');
      // window.location.reload();
      // localStorage.clear()
      //  localStorage.clear()
    }
    if (
      status === 400 &&
      config.method === "get" &&
      data.errors.hasOwnProperty("id")
    ) {
    }
    if (status === 500) {
      console.log("Network>>>kkkkstatus", status);
    }
    return error.response;
  }
);

export default Axiosinstance;















// setuping the accesss-token in the local storgae
const asyncLocalStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  },
};



 await asyncLocalStorage.setItem("x-token", res.data.data.token);
 
 
 
 
 
 
 // in backending sending the token by generating
 // MODEL Code
 
 const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

let SCPUserSchema = Schema({
  fullName: { type: String, required: true, trim: true, minlength: 1 },
  email: { type: String, required: true, trim: true, minlength: 1, unique: true, validate: { validator: validator.isEmail, message: '{VALUE} is not a valid email' } },
  password: { type: String, require: true, trim: true, min: [6, 'password should be greater than 6'] },
  profileImage: { type: String },
  serviceID: { type: Schema.Types.ObjectId, require: true, ref: "ServicesProvided" },
  serviceName: { type: String, trim: true, minlength: 1, maxlength: 250 },
  category: { type: String, require: true },
  businessName: { type: String, trim: true, minlength: 1 },
  businessAddress: { type: String, trim: true, minlength: 1 },
  phone: { type: Number, minlength: [9, 'Phone number should be greater than 10'], maxlength: [12, 'Phone number should not be greater than 12'], required: [true, 'Please provide Valid phone number'] },
  countryCode: { type: String, minlength: 1, require: true },
  faxNumber: { type: Number, minlength: [4, 'Fax number should be greater than 6'], maxlength: 10 },
  businessLicense: { type: String, require: true },
  idProof: { type: String, require: true },
  businessCertification: { type: String, require: true },
  workEmail: { type: String, },
  isAdminApproved: { type: Boolean, default: false },
  isSuspended: { type: Boolean, default: false },
  isEmailVerified: { type: Boolean, default: false },
  createdTimeStamp: { type: Date, default: Date.now },
  country: { type: String, trim: true, require: true },
  state: { type: String, trim: true, require: true },
  city: { type: String, trim: true, require: true },
  street: { type: String, trim: true, require: true },
  landMark: { type: String, trim: true, require: true },
  zip: { type: Number, trim: true, require: true },
  isLocationExact: { type: Boolean, default: false },
  hostUserId: { type: Schema.Types.ObjectId },
  isDCCreated: { type: Boolean, default: false },
  isProfileCreated: { type: Boolean, default: false },
  role: { type: Schema.Types.ObjectId, ref: 'scpUserRoles' },
  location: {
    coordinates: [Number],
    type: { type: String, default: 'Point' }
  },
  emailOTP: { type: String },
  dob: { type: Date },
  gender: { type: String },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],

}, { versionKey: false, timestamps: true, collection: "SCPUser" })
SCPUserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

SCPUserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({ _id: user._id.toHexString(), access }, process.env.JWT_KEY).toString();
  //console.log("Model token created user value",token)
  user.tokens.push({ access, token });
  return user.save().then(() => {
    return token;
  });
};

SCPUserSchema.methods.removeToken = function (token) {
  var user = this;

  return user.update({
    $pull: {
      tokens: { token }
    }
  });
};

SCPUserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_KEY);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

SCPUserSchema.statics.findByCredentials = function (email, password) {
  var User = this;

  return User.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      // Use bcrypt.compare to compare password and user.password
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

SCPUserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

SCPUserSchema.plugin(autopopulate);
var Scpuser = mongoose.model('SCPUser', SCPUserSchema);
module.exports = Scpuser









// in js file

        var newUser = new SeniorCareProviderUser();
        
          newUser
          .save()
          .then(() => {
            console.log("user added");
            return newUser.generateAuthToken();
          })
          .then((token) => {
            console.log("user added1111", token);
            const access = "accessToken";
            const accesstoken = jwt
              .sign(
                { _id: newUser._id.toHexString(), access },
                process.env.JWT_KEY,
                { expiresIn: 60 * 60 }
              )
              .toString();
            res.setHeader("x-token", accesstoken);
            res.setHeader("x-auth", token);
            mailTemplate(reqBody.email, newUser._id);
            res.json({
              status: 200,
              message: "Success",
              data: newUser ? newUser.toObject() : {},
            });
          })
          .catch((e) => {
            res.status(400).json({ message: e, status: "Error" });
          });
          
          
          
          
          
          
          
          
          
          
          
  // restruciting the user with access-token
  
  
  
  const createError = require("http-errors");
const express = require("express");
require("express-async-errors");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const jwt = require("jsonwebtoken");
const log4js = require("log4js");
const logger = require("morgan");

log4js.configure({
  appenders: {
    console: { type: "console" },
    cheese: { type: "file", filename: "cheese.log" },
  },
  categories: { default: { appenders: ["console"], level: "all" } },
});
const log = log4js.getLogger("app");
const app = express();

app.set("trust proxy", true);
app.use(logger("dev"));
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
          const publicRoutes = [
  "/api/auth/v1.1/s-care1/forgotPassword",
  "/api/auth/v1.1/s-care1/signin",
  "/api/auth/v1.1/s-care1/forgotEmailOTPValidation",
  "/api/auth/v1.1/s-care1/resetPassword",

  // //  Extra for typeSafe 
  "/api/auth/v1.1/s-care1/forgotPassword/",
  "/api/auth/v1.1/s-care1/signin/",
  "/api/auth/v1.1/s-care1/forgotEmailOTPValidation/",
  "/api/auth/v1.1/s-care1/resetPassword/",
];
app.use((req, res, next) => { 
  var token = req.header("x-token");
  var decoded;
  try {
    var origin = req.url;
    if (publicRoutes.includes(String(origin).trim())) {
      next();
    } else {
      decoded = jwt.verify(token, process.env.JWT_KEY);
      next();
    }
  } catch (e) {
    return res
      .status(401)
      .json({ status: 401, message: "Invalid JWT formate", e });
  }
});
 
 
 
