import { createSlice } from "@reduxjs/toolkit";

const initialState: AppsProps = {
    taskbar: [],
    desktop: [],
    installed: [],
    pinned: []
}


const appsSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {
        installApp: (state, action) => {
            state.installed.push(action.payload);
        },
        uninstallApp: (state, action) => {
            state.installed = state.installed.filter(app => app.id !== action.payload.id);
        },
        pinApp: (state, action) => {
            state.pinned.push(action.payload);
        },
        unpinApp: (state, action) => {
            state.pinned = state.pinned.filter(app => app.id !== action.payload.id);
        },
        addAppToTaskbar: (state, action) => {
            state.taskbar.push(action.payload);
        },
        removeAppFromTaskbar: (state, action) => {
            state.taskbar = state.taskbar.filter(app => app.id !== action.payload.id);
        },
        addAppToDesktop: (state, action) => {
            state.desktop.push(action.payload);
        },
        removeAppFromDesktop: (state, action) => {
            state.desktop = state.desktop.filter(app => app.id !== action.payload.id);
        }
    }
})

interface App {
    title: string;
    id: number;
    icon: string;
}

type AppsProps = {
    taskbar: App[],
    desktop: App[],
    installed: App[],
    pinned: App[]
}

export const { addAppToDesktop, addAppToTaskbar, installApp, pinApp, removeAppFromDesktop, removeAppFromTaskbar, uninstallApp, unpinApp } = appsSlice.actions;

export default appsSlice.reducer;