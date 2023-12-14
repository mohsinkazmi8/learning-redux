import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";


const Store = configureStore({
    reducer : {
        user: userSlice
    },
})
export default Store;