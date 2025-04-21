import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface TerminalState {
    commandHistory: string[]
    userInput: string
}

const initialState: TerminalState = {
    commandHistory: ["Enter 'help' to see available commands."],
    userInput: "",
}

const terminalSlice = createSlice({
    name: "terminal",
    initialState,
    reducers: {
        setUserInput: (state, action: PayloadAction<string>) => {
            state.userInput = action.payload
        },
        addCommandToHistory: (state, action: PayloadAction<string | string[]>) => {
            if (typeof action.payload === "string") {
                state.commandHistory.push(action.payload)
            } else {
                state.commandHistory.push(...action.payload)
            }
        },
        clearHistory: (state) => {
            state.commandHistory = []
        },
    }
})

export const {
    setUserInput,
    addCommandToHistory,
    clearHistory,
} = terminalSlice.actions

export default terminalSlice.reducer