import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
    title: 'Ramees Kallan | Network Support & Infrastructure Engineer',
    description: 'Portfolio of Ramees Kallan - Network Support Engineer with hands-on experience in routers, switches, wireless APs, multi-site network migrations, and live cutovers. Preparing for Cisco CCNA.',
}

import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='scroll-smooth' suppressHydrationWarning>
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen flex flex-col`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ScrollProgress />
                    <CustomCursor />
                    <Navbar />
                    <main className="flex-grow flex flex-col relative z-10">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
