import Link from "next/link";
import type { Project } from "@/content/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="shadow-md group block rounded-2xl border border-border-subtle bg-accent-dark/90 p-4 hover:bg-accent-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <div className="aspect-video rounded-lg bg-background/80 mb-4" />

      <div className="flex flex-col items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-nav-foreground">
          {project.name}
        </h3>

        <span className="shrink-0 text-xs rounded-full bg-accent-mauve/90 text-nav-foreground px-2.5 py-1">
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-nav-foreground/80 line-clamp-2">
        {project.summary}
      </p>

      <hr className="my-4 border-nav-foreground/30" />

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