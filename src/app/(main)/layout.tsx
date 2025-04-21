import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main
                className="container min-h-screen mt-28"
            >
                {children}
            </main>
            <Footer />
        </>
    )
}