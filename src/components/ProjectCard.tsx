import Link from "next/link";
import type { Project } from "@/content/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card card-hover group block p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine"
    >
      <div className="aspect-video rounded-xl overflow-hidden bg-sage/15 mb-5">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-forest">
          {project.name}
        </h3>

        <span
          className={`tag shrink-0 ${
            project.status === "Ongoing"
              ? "tag-sage"
              : project.status === "Completed"
                ? "tag-gold"
                : "tag-orange"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-2">
        {project.summary}
      </p>

      <hr className="my-4 border-line" />

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}