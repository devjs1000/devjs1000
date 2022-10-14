import { createSlice } from "@reduxjs/toolkit";


const initialState: SystemState = {
    isDarkMode: false,
    volume: 30,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    isOnline: true,
    isMuted: false,
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        lightMode: (state) => {
            state.isDarkMode = false
        },
        darkMode: (state) => {
            state.isDarkMode = true
        },
        setVolume: (state, action) => {
            state.volume = action.payload
        },
        setTime: (state, action) => {
            state.time = action.payload.toLocaleTimeString()
        },
        setDate: (state, action) => {
            state.date = action.payload.toLocaleDateString()
        },
        online: (state) => {
            state.isOnline = true
        },
        offline: (state) => {
            state.isOnline = false
        },
        mute: (state) => {
            state.isMuted = true
        }
    }
})

interface SystemState {
    isDarkMode: boolean;
    volume: number;
    time: string;
    date: string;
    isOnline: boolean;
    isMuted: boolean;

}


export const { darkMode, lightMode, setDate, setTime, setVolume, mute, offline, online } = systemSlice.actions
export default systemSlice.reducer