import { createSlice } from "@reduxjs/toolkit";
import { wallpaper } from "../assets";


const initialState: SystemState = {
    isDarkMode: false,
    volume: 30,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    isOnline: true,
    isMuted: false,
    wallpaper: wallpaper,
    layout: {
        m: [0, 0, 0, 0],
        p: [12, 12, 12, 12]
    },
    bottomBar: true,
    defaultIcon: {
        size: 36,
        color: '#fff',
        hoverColor: '#fff',
        radius: 100
    },
    displayEffects: {
        blur: 0
    }
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
        setOnline: (state) => {
            state.isOnline = true
        },

        mute: (state) => {
            state.isMuted = true
        },
        setWallpaper: (state, action) => {
            state.wallpaper = action.payload
        },
        setPadding: (state, action) => {
            state.layout.m = action.payload
        },
        setMargin: (state, action) => {
            state.layout.p = action.payload
        },
        setBottomBar: (state, action) => {
            state.bottomBar = action.payload
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
    wallpaper: string;
    layout: {
        m: [number, number, number, number],
        p: [number, number, number, number],
    },
    bottomBar: boolean,
    defaultIcon: {
        size: number,
        color: string,
        hoverColor: string,
        radius: number,
    },
    displayEffects: {
        blur: number,
    },


}


export const { darkMode, lightMode, setDate, setTime, setVolume, mute, setOnline, setMargin, setPadding, setWallpaper } = systemSlice.actions
export default systemSlice.reducer