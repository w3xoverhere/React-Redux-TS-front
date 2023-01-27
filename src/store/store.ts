import { configureStore } from '@reduxjs/toolkit'
import displayReducer from './displaySlice'

export const store = configureStore({
    reducer: {
        displayMode: displayReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
