import { createSlice } from "@reduxjs/toolkit";

const initialState: ProcessState = {
    isLogged: false,
    isFetching: false,
    error: null,
    loading: false,
    users: [],
    shutdown: false,
    message: {
        text: "hello world!",
        variant: "info"
    },
    showMessage: false
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
        showMessage: (state, action) => {
            state.showMessage = true;
            state.message = action.payload;
        },
        hideMessage: (state) => {
            state.showMessage = false;
        }
    }
});


interface ProcessState {
    isLogged: boolean;
    isFetching: boolean;
    error: string | null;
    users: User[];
    loading: boolean;
    shutdown: boolean;
    showMessage: boolean,
    message: {
        text: string;
        variant: variant
    }
}

type variant = "warning" | 'info' | 'danger' | 'success'
interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export const { login, logout, fetching, fetched, error, loading, loaded, shutdown, } = processSlice.actions;
export default processSlice.reducer;