const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require("axios");

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const fetchUsers = createAsyncThunk("user/fetchUsers", ()=>{
    return axios
    .get("https://reqres.in/api/users?page=2")
    .then(jsonres => jsonres.data.data.map((user)=>user.first_name))
})

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    extraReducers : {
        ['user/fetchUsers'.pending] : (state)=>{
            state.loading = true
            state.users = []
            state.error =''
        },
        ['user/fetchUsers'.fulfilled] : (state, action)=>{
            state.loading = false
            state.users = action.payload
            state.error =''
        },
        ['user/fetchUsers'.rejected] : (state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.payload
        }
    }
})

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers