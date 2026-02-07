"use client"

import Image from "next/image"
import { Calendar, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <div>
      <div className="mb-6">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10 transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 animate-glow-pulse">
          <Image
            src="/images/Fah.jpg"
            alt="Naphatsaran Intewa"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground transition-colors sm:text-5xl">
        <span className="text-balance">Naphatsaran Intewa</span>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
        Front-End Developer
      </h2>
      <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
        Front-End Developer with over 2 years of professional experience building responsive and scalable web applications.
      </p>

      <nav className="mt-12" aria-label="In-page jump links">
        <ul className="flex flex-col gap-4">
          <NavLink href="#about" label="ABOUT" />
          <NavLink href="#experience" label="EXPERIENCE" />
          <NavLink href="#skills" label="SKILLS" />
          <NavLink href="#education" label="EDUCATION" />
        </ul>
      </nav>

      <ul className="mt-12 flex flex-col gap-3 text-sm text-muted-foreground" role="list">
        <li className="flex items-center gap-3 transition-colors hover:text-foreground">
          <Calendar className="h-4 w-4 shrink-0 text-primary/80" aria-hidden="true" />
          <span>14 June 1999</span>
        </li>
        <li className="flex items-center gap-3 transition-colors hover:text-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary/80" aria-hidden="true" />
          <span>Thailand</span>
        </li>
        <li>
          <a
            href="tel:062-068-3387"
            className="flex items-center gap-3 transition-all hover:translate-x-1 hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0 text-primary/80" aria-hidden="true" />
            <span>062-068-3387</span>
          </a>
        </li>
      </ul>

      <div className="mt-8 flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/naphatsaran-intewa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-lg p-2 text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
        </a>
        <a
          href="mailto:naphatsaran.intewa@gmail.com"
          aria-label="Email"
          className="rounded-lg p-2 text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:text-primary"
      >
        <span className="h-px w-8 origin-left bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-primary group-hover:scale-x-100" />
        {label}
      </a>
    </li>
  )
}
