import processSlice from "./process.slice";
import systemSlice from "./system.slice";
import userSlice from "./user.slice";
import activeSlice from "./active.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        process: processSlice,
        system: systemSlice,
        user: userSlice,
        active: activeSlice
    }
})

export default store;