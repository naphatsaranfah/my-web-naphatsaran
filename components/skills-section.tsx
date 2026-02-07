import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Frameworks / Libraries",
    skills: ["React", "Material UI", "Ant Design", "Bootstrap", "Tailwind"],
  },
  {
    name: "State Management",
    skills: ["Zustand", "React Query"],
  },
  {
    name: "Build Tools",
    skills: ["Git", "GitHub"],
  },
  {
    name: "Concepts",
    skills: ["REST API", "Clean Architecture", "Responsive Design"],
  },
  {
    name: "Soft Skills",
    skills: ["Communication", "Problem-solving", "Teamwork", "Time Management"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills">
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">SKILLS</h2>
      </div>
      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
