import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* เลย์เอาต์เดียวเรียงลงตามภาพ — คงที่ทุกขนาดหน้าจอ */}
      <div className="mx-auto w-full max-w-[680px] px-6 py-12">
        <header>
          <HeroSection />
        </header>

        <main id="content" className="flex flex-col gap-24 pt-16">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
        </main>

        <footer className="mt-24 pb-16 text-sm text-muted-foreground">
          <p>
            Designed and built with{" "}
            <a
              href="https://nextjs.org"
              className="font-medium text-foreground transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              className="font-medium text-foreground transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            . Inspired by{" "}
            <a
              href="https://brittanychiang.com"
              className="font-medium text-foreground transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              brittanychiang.com
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
