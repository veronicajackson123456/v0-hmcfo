import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HMCFO LTD - Comprehensive Business Support Services",
  description:
    "Your trusted partner in growth, efficiency, and success. HMCFO LTD provides comprehensive business support services including administrative support, HR, consultancy, and more.",
  keywords:
    "business support, administrative services, HR solutions, business consultancy, HMCFO",
  authors: [{ name: "HMCFO LTD" }],
  openGraph: {
    title: "HMCFO LTD - Comprehensive Business Support Services",
    description: "Your trusted partner in growth, efficiency, and success.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
