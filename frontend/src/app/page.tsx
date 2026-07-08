import { InquiryForm } from "@/components/inquiry-form"
import { Toaster } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Zap, Shield, Bot, ArrowRight,
  MapPin, Phone, Mail
} from "lucide-react"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"




const features = [
  {
    icon: Zap,
    label: "Instant Notification",
    desc: "Real-time Telegram alerts on every submission",
  },
  {
    icon: Shield,
    label: "Secure & Validated",
    desc: "Every field is validated before saving",
  },
  {
    icon: Bot,
    label: "AI-Powered Stack",
    desc: "Built with modern full-stack architecture",
  },
]

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "12+", label: "Active Programs" },
  { value: "24h", label: "Response Time" },
]

const navLinks = ["Parents", "School", "Blog", "RISE", "Contact Us"]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Toaster position="top-right" richColors />

      {/* Top bar */}
      <div className="border-b border-border bg-muted/40 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> 098 / 099 338 849
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> info@techforkids.asia
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Phnom Penh, Cambodia
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebookF className="w-3.5 h-3.5 hover:text-foreground cursor-pointer transition-colors" />
            <FaLinkedinIn className="w-3.5 h-3.5 hover:text-foreground cursor-pointer transition-colors" />
            <FaInstagram className="w-3.5 h-3.5 hover:text-foreground cursor-pointer transition-colors" />
            <FaYoutube className="w-3.5 h-3.5 hover:text-foreground cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-border flex-shrink-0">
              <Image
                src="/tka.jpg"
                alt="TKA Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm leading-tight">Tech for Kids</p>
              <p className="text-xs text-muted-foreground leading-tight">Academy</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <span
                key={link}
                className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors font-medium"
              >
                {link}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">Alert System v1.0</Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Left — 3 cols */}
            <div className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Inquiry & Registration
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                  Start Your <br />
                  <span className="italic font-bold text-foreground/70">Tech Journey</span>
                  <br />with Us
                </h1>

                <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                  Fill out the form and our team will reach out within 24 hours
                  to help you get started with our programs.
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ArrowRight className="w-4 h-4" />
                  <span>No commitment required — just say hello</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-background p-5 text-center">
                    <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/40 transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ring-1 ring-border group-hover:ring-foreground/20 transition-all">
                      <Icon className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 2 cols */}
            <div className="lg:col-span-2">
              <Card className="ring-1 ring-border shadow-sm">
                <CardHeader className="pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-border flex-shrink-0">
                      <Image
                        src="/tka.jpg"
                        alt="TKA Logo"
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Send an Inquiry</CardTitle>
                      <CardDescription className="text-xs">
                        We'd love to hear from you
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-border">
                <Image src="/tka.jpg" alt="TKA" width={32} height={32} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Tech for Kids Academy</p>
                <p className="text-xs text-muted-foreground">© 2026 All rights reserved.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span className="text-foreground font-medium">Built by Len Monireach</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}