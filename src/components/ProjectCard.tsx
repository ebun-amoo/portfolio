import Link from "next/link";
import type { Project } from "@/content/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="shadow-md group block rounded-2xl border border-border-subtle bg-accent-dark/90 p-4 hover:bg-accent-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <div className="aspect-video rounded-lg bg-background/80 mb-4" />
      <h3 className="font-display text-lg font-semibold text-nav-foreground">
        {project.name}
      </h3>
      <hr className="my-3 border-nav-foreground/30" />
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs rounded-full bg-background/80 text-foreground px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
