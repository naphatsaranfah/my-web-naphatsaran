import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-[680px] px-6 py-8 sm:py-12">
        {/* Header — โปรไฟล์ + นำทาง */}
        <header className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 px-8 py-10 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-primary/10 animate-fade-in-up">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary/5 blur-xl" />
          <div className="relative">
            <HeroSection />
          </div>
        </header>

        {/* Divider ระหว่าง header กับ content */}
        <div className="section-divider my-10" aria-hidden="true" />

        {/* Main content — เนื้อหาหลัก */}
        <main
          id="content"
          className="relative flex flex-col gap-20 rounded-2xl border border-border/40 bg-background/80 px-6 py-12 backdrop-blur-sm sm:px-8"
        >
          <AboutSection />
          <div className="section-divider" aria-hidden="true" />
          <ExperienceSection />
          <div className="section-divider" aria-hidden="true" />
          <SkillsSection />
          <div className="section-divider" aria-hidden="true" />
          <EducationSection />
        </main>

        {/* Footer — ส่วนล่าง */}
        <footer
          className="mt-12 rounded-2xl border border-border/40 bg-muted/30 px-6 py-6 text-center backdrop-blur-sm animate-fade-in animate-delay-500"
          role="contentinfo"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Naphatsaran Intewa · Front-End Developer
          </p>
        </footer>
      </div>
    </div>
  )
}
