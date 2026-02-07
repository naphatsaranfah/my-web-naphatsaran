export function AboutSection() {
  return (
    <section id="about" aria-label="About me">
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">ABOUT</h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="leading-relaxed text-muted-foreground">
          I&apos;m a Front-End Developer based in Thailand with a passion for building accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. With over 2 years of professional experience, I specialize in creating responsive and scalable web applications using modern JavaScript frameworks.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          My experience spans the full project lifecycle — from requirements gathering and UI/UX design to production deployment and CI/CD pipeline support. I thrive in collaborative environments, working closely with cross-functional teams including designers, back-end developers, and DevOps engineers.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Currently, my core stack includes{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">TypeScript</span>,{" "}
          <span className="font-medium text-foreground">Tailwind CSS</span>, and state management solutions like{" "}
          <span className="font-medium text-foreground">Zustand</span> and{" "}
          <span className="font-medium text-foreground">React Query</span>. I also bring experience with real-time features using WebSockets and clean architecture principles.
        </p>
      </div>
    </section>
  )
}
