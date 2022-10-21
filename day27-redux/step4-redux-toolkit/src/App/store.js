// const configureStore = require("@reduxjs/toolkit").configureStore;
//const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const heroReducer = require("../features/hero/heroSlice");
// const movieReducer = require("../features/movie/movieSlice");
// const logger = require("redux-logger").createLogger

import {configureStore} from "@reduxjs/toolkit";
import heroReducer from "../features/hero/heroSlice";
import movieReducer from "../features/movie/movieSlice";
//import logger from "redux-logger";

const store = configureStore({
    reducer : {
        hero : heroReducer,
        movie : movieReducer
    }
    // },
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger())
});


export default store;