import { createSlice } from "@reduxjs/toolkit";

const initialState: ProcessState = {
    isLogged: false,
    isFetching: false,
    error: null,
    loading: false,
    users: [],
    shutdown: false,
    message: {
        title: "title",
        variant: "info",
        description:'description'
    },
    messageVisible: false
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
            state.messageVisible = true;
            state.message = action.payload;
        },
        hideMessage: (state) => {
            state.messageVisible = false;
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
    messageVisible: boolean,
    message: {
        title: string;
        variant: variant;
        description:string;
    }
}

type variant = "warning" | 'info' | 'danger' | 'success'
interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export const { login, logout, fetching, fetched, error, loading, loaded, shutdown,hideMessage, showMessage } = processSlice.actions;
export default processSlice.reducer;