import { projects } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/cta";
import PatternAccent from "@/components/PatternAccent";

export const metadata = {
  title: "Projects — Ebunoluwa Amoo",
};

export default function ProjectsPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
      <PatternAccent
        variant="curl"
        className="-right-6 -top-10 hidden md:block"
        color="var(--tangerine)"
        opacity={0.06}
      />
      <h1 className="heading-section heading-accent mb-10">
        Things I've built
      </h1>

      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}