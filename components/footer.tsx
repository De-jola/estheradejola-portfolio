"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 mt-16 sm:mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">© {currentYear} Frontend Developer. All rights reserved.</p>
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={16} className="text-accent fill-accent" /> in Excellence
          </div>

          {/* Right Section */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <span className="text-border">/</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
