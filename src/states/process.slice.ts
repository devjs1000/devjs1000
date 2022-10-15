import { createSlice } from "@reduxjs/toolkit";

const initialState: ProcessState = {
    isLogged: false,
    isFetching: false,
    error: null,
    loading: false,
    users: [],
    shutdown: false,
};

const processSlice = createSlice({
    name: "process",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true;
        },
        logout: (state) => {
            state.isLogged = false;
        },
        fetching: (state) => {
            state.isFetching = true;
        },
        fetched: (state) => {
            state.isFetching = false;
        },
        error: (state, action) => {
            state.error = action.payload;
        },
        loading: (state) => {
            state.loading = true;
        },
        loaded: (state) => {
            state.loading = false;
        },
        shutdown: (state) => {
            state.shutdown = true;
        },
    }
});


interface ProcessState {
    isLogged: boolean;
    isFetching: boolean;
    error: string | null;
    users: User[];
    loading: boolean;
    shutdown: boolean;
}

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export const { login, logout, fetching, fetched, error, loading, loaded } = processSlice.actions;
export default processSlice.reducer;