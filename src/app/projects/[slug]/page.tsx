import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/data";
import PatternAccent from "@/components/PatternAccent";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project
      ? `${project.name} — Ebunoluwa Amoo`
      : "Project not found",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="relative mx-auto max-w-4xl px-6 pb-20 pt-28 sm:pt-32">
      <PatternAccent
        variant="spiral"
        className="-right-10 top-40 hidden md:block"
        color="var(--gold)"
        opacity={0.06}
      />

      <Link href="/projects" className="link-editorial text-sm">
        ← All projects
      </Link>

      <div className="card group my-6 overflow-hidden">
        <div className="aspect-video overflow-hidden bg-sage/15">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex-col flex md:flex-row gap-3 mb-3 md:items-center">
        <h1 className="font-display text-3xl font-semibold text-forest">
          {project.name}
        </h1>

        <span
          className={`tag w-fit shrink-0 ${
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

      <p className="text-ink-soft leading-relaxed mb-4 italic">
        {project.summary}
      </p>

      <p className="text-ink/75 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}