import { ReactNode } from "react"
import PageWrapper from "./PageWrapper"
import { ReduxProvider } from "@/app/providers"

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <ReduxProvider>
            <PageWrapper>
                {children}
            </PageWrapper>
        </ReduxProvider>
    )
}