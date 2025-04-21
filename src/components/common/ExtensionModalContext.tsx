"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const EXTENSION_URL = "https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd"

interface ExtensionModalContextValue {
  open: () => void
}

const ExtensionModalContext = React.createContext<ExtensionModalContextValue | null>(null)

export function ExtensionModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a[data-extension], button[data-extension]")
      if (target) {
        if (isMobile) {
          event.preventDefault()
          setIsOpen(true)
        }
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [isMobile])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    if (!email || typeof email !== "string") {
      return
    }
    trackEvent("Extension Modal Submit", { email, timestamp: new Date().toISOString() })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        throw new Error("Network response was not ok")
      }
      setIsOpen(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ExtensionModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Extension Instructions</DialogTitle>
            <DialogDescription>
              The Chrome extension is only available on desktop. Enter your email to receive installation instructions.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="you@example.com" required className="mb-4" />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </ExtensionModalContext.Provider>
  )
}

export function useExtensionModal() {
  const context = React.useContext(ExtensionModalContext)
  if (!context) {
    throw new Error("useExtensionModal must be used within ExtensionModalProvider")
  }
  return context
}