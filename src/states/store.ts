import processSlice from "./process.slice";
import systemSlice from "./system.slice";
import userSlice from "./user.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        process: processSlice,
        system: systemSlice,
        user: userSlice
    }
})

export default store;