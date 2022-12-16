import { createSlice } from "@reduxjs/toolkit";
import { AppProps, apps } from "../static/apps";

const initialState: AppProps[] = [...apps]

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        addApp: (state, action) => {
            state.push(action.payload)
        },
        removeApp: (state, action) => {
            state.splice(action.payload, 1)
        },
        clearStorage: (state) => {
            state = []
        },
        setStorage: (state, action) => {
            state = action.payload
        },
    }
})





export const { clearStorage, setStorage, addApp, removeApp } = activeSlice.actions

export default activeSlice.reducer;