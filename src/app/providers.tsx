"use client"

import { Provider } from "react-redux"
import { store } from "@/lib/store"
import PageWrapper from "@/components/PageWrapper"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}