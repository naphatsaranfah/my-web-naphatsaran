"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface Screenshot {
  src: string
  alt: string
}

interface ExperienceItem {
  period: string
  title: string
  company: string
  location?: string
  logo?: string
  description: string[]
  tags: string[]
  screenshots?: Screenshot[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Dec 2023 — Jan 2026",
    title: "Front-End Developer",
    company: "Hybiot CO., LTD.",
    location: "Remote",
    logo: "/images/logo2.jpeg",
    description: [
      "Contributed to the full project lifecycle from requirements gathering to production deployment.",
      "Developed and maintained clean, reusable, and scalable front-end code using React and TypeScript.",
      "Built responsive user interfaces using Material UI, Ant Design, and Tailwind CSS.",
      "Integrated front-end applications with RESTful APIs to support data-driven functionality.",
      "Collaborated with DevOps teams to support CI/CD pipelines and automated deployments.",
      "Utilized Zustand and React Query for efficient state management and data fetching.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Ant Design", "Zustand", "React Query"],
    screenshots: [
      {
        src: "/images/hybiot1.png",
        alt: "ICMP User Management - Data table with user roles, status, and connection tracking",
      },
      {
        src: "/images/hybiot2.png",
        alt: "ICMP Add User - Form with password strength indicator and user settings",
      },
      {
        src: "/images/hybiot3.png",
        alt: "ICMP Role Management - Role configuration with color picker and permission settings",
      },
      {
        src: "/images/kmitl.png",
        alt: "KMITL project - ผลงานที่ Hybiot 1",
      },
      {
        src: "/images/kmitl2.png",
        alt: "KMITL project - ผลงานที่ Hybiot 2",
      },
      {
        src: "/images/kmitl3.png",
        alt: "KMITL project - ผลงานที่ Hybiot 3",
      },
    ],
  },
  {
    period: "Jul 2022 — Jun 2023",
    title: "UX/UI Designer",
    company: "CONTROL A CO., LTD.",
    description: [
      "Designed UX/UI using Figma based on provided requirements and implemented user interfaces using React.js (UI layer only).",
      "Designed and developed dashboard interfaces for shop management systems.",
      "Built and styled UI components using HTML and CSS with responsive design support across devices.",
      "Collaborated with cross-functional teams, including web hosting and server-related teams, to ensure smooth integration and deployment.",
    ],
    tags: ["React.js", "Figma", "HTML", "CSS", "Responsive Design"],
  },
  {
    period: "2021",
    title: "Frontend Developer (Internship)",
    company: "Computerlogy Company Limited",
    logo: "/images/logo1.png",
    description: [
      "Developed and maintained features for retrieving, adding, deleting, and displaying data from social media APIs.",
      "Worked with API integration to manage and present social media channel data within the system.",
      "Assisted in improving data handling workflows and ensuring accurate data presentation.",
      "Collaborated with team members to support ongoing development and testing processes.",
    ],
    tags: ["API Integration", "Social Media APIs", "JavaScript"],
  },
]

function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null)

  return (
    <>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {screenshots.map((screenshot) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setSelectedImage(screenshot)}
            className="group/img relative aspect-video overflow-hidden rounded-md border border-border/50 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={screenshot.src || "/placeholder.svg"}
              alt={screenshot.alt}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 transition-colors group-hover/img:bg-background/10" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedImage(null)
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-card p-2 text-foreground transition-colors hover:bg-secondary hover:text-primary"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-lg border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              className="h-auto w-full object-contain"
            />
            <div className="bg-card/90 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work experience" className="animate-fade-in-up animate-delay-200">
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">EXPERIENCE</h2>
      </div>
      <ol className="group/list flex flex-col gap-12" role="list">
        {experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.title}`}
            className="rounded-xl border border-transparent px-4 py-4 transition-all duration-300 hover:border-primary/20 hover:bg-card/30 hover:shadow-md"
          >
            <div className="group relative flex flex-col gap-4 pb-1">
              <header className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {exp.period}
              </header>
              <div>
                <div className="flex items-start gap-3">
                  {exp.logo && (
                    <div className="relative mt-0.5 h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-border/50 bg-card">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>{exp.title}</span>
                    <span className="mx-2 text-muted-foreground">{"·"}</span>
                    <span className="text-primary">{exp.company}</span>
                    {exp.location && (
                      <span className="ml-2 text-xs text-muted-foreground">({exp.location})</span>
                    )}
                  </h3>
                </div>
                <ul className="mt-3 flex flex-col gap-2" role="list">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used" role="list">
                  {exp.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="secondary" className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-transform hover:scale-105 hover:bg-primary/20">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
                {exp.screenshots && exp.screenshots.length > 0 && (
                  <ScreenshotGallery screenshots={exp.screenshots} />
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
