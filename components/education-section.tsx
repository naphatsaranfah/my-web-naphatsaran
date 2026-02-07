import { GraduationCap, Languages } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" aria-label="Education">
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">EDUCATION</h2>
      </div>
      <div className="flex flex-col gap-10">
        {/* Education */}
        <div className="flex flex-col gap-4 pb-1">
          <header className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            2018 — 2021
          </header>
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-medium leading-snug text-foreground">
                Burapha University
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Bachelor of Technology Program, Department of Information Technology
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="flex flex-col gap-4 pb-1">
          <header className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            LANGUAGES
          </header>
          <div>
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-medium leading-snug text-foreground">
                Language Proficiency
              </h3>
            </div>
            <ul className="mt-3 flex flex-col gap-2" role="list">
              <li className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Thai</span>
                <span className="h-px flex-1 bg-border" />
                <span>Native</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">English</span>
                <span className="h-px flex-1 bg-border" />
                <span>Intermediate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
