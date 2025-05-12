import Header from "@/components/header/Header"
import Footer from "@/components/Footer"


export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main
                className="min-h-screen mt-14 flex flex-col items-center justify-center"
            >
                {children}
            </main>
            <Footer />
        </>
    )
}