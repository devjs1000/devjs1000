import { createSlice } from "@reduxjs/toolkit";

const initialState: ActiveProps = {
    height: 400,
    width: 400,
    icon: '',
    id: -1,
    title: '',
    opacity: 1,
    storageName: 'null'
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        setStorage: (state, action) => {
            localStorage.setItem(state.storageName, action.payload)
        },
        clearStorage: (state) => {
            localStorage.removeItem(state.storageName)
        },
        updateStorage: (state, action) => {
            const { storageName } = state
            localStorage.setItem(storageName, { ...JSON.parse(localStorage.getItem(storageName)), ...action.payload })
        }
    }
})



interface ActiveProps {
    title: string;
    id: number;
    icon: string;
    height: number;
    width: number;
    opacity: number;
    storageName: string;
}