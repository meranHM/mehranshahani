import { configureStore } from "@reduxjs/toolkit"
import terminalReducer from "./slices/terminalSlice"
import retroReducer from "./slices/retroSlice"


export const store = configureStore({
    reducer: {
        terminal: terminalReducer,
        retro: retroReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
