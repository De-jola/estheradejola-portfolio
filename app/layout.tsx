import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description:
    "Professional portfolio showcasing web development projects, skills, and expertise in React, Vue, and modern frontend technologies.",
  keywords: ["frontend", "developer", "portfolio", "react", "vue", "javascript", "typescript"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Frontend Developer Portfolio",
    description: "Explore my frontend development projects and skills",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F8F8" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E1E" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${geist.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
