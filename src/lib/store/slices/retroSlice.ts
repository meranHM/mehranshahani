import { createSlice } from "@reduxjs/toolkit"

interface RetroState {
    isRetro: boolean
    isRetroPending: boolean
    shake: boolean
}

const initialState: RetroState = {
    isRetro: false,
    isRetroPending: false,
    shake: false,
}

const retroSlice = createSlice({
    name: "retro",
    initialState,
    reducers: {
        startRetroTransition: (state) => {
            state.isRetroPending = true
            state.shake = true
        },
        activateRetro: (state) => {
            state.isRetro = true
            state.isRetroPending = false
            state.shake = false
        },
        deactivateRetro: (state) => {
            state.isRetro = false
            state.isRetroPending = false
        }
    }
})

export const {
    startRetroTransition,
    activateRetro,
    deactivateRetro,
} = retroSlice.actions

export default retroSlice.reducer