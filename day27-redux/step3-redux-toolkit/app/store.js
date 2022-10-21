const configureStore = require("@reduxjs/toolkit").configureStore;
//const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const userReducer = require("../features/users/userSlice");
const logger = require("redux-logger").createLogger

const store = configureStore({
    reducer : {
        user : userReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger())
});

module.exports = store;