import { ContactCard } from "@/components/contact-card"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <Toaster />
      <ContactCard />
    </div>
  )
}
