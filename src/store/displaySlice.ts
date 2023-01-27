import { createSlice } from '@reduxjs/toolkit'
import type {RootState} from "./store";
import {lightTheme, darkTheme} from "../components/smart-components/DisplayMode/Themes";
import {ThemeI} from "../components/smart-components/DisplayMode/Themes";
// If display = night, then theme of app will be night, else if display = day, then theme will be day.
interface DisplayState {
    display: "night"|"day",
    theme: ThemeI,
}

const initialState:DisplayState = {
    display: "day",
    theme: lightTheme,
}

export const displaySlice = createSlice({
    name: 'displayMode',
    initialState,
    reducers: {
        swapMode: (state) => {
            if(state.display === "night") {
                state.display = "day";
                state.theme = lightTheme;
            }
            else {
                state.display = "night";
                state.theme = darkTheme;
            }
        }
    }
});

export const selectDisplayMode = (state:RootState) => state.displayMode.display;
export const selectTheme = (state:RootState) => state.displayMode.theme;
export const {swapMode} = displaySlice.actions;
export default displaySlice.reducer;