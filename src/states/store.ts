import processSlice from "./process.slice";
import systemSlice from "./system.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        process: processSlice,
        system: systemSlice
    }
})

export default store;