import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/data";

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
    <article className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:pt-32">
      <Link
        href="/projects"
        className="text-sm underline underline-offset-4 hover:text-accent-dark"
      >
        ← All projects
      </Link>

      <div className="shadow-md group rounded-lg border border-border-subtle bg-accent-dark/90 hover:bg-accent-dark transition-colors my-5">
        <div className="aspect-video rounded overflow-hidden bg-background/80 m-2">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex-col flex md:flex-row gap-3 mb-3 md:items-center">
        <h1 className="font-display text-3xl font-semibold">
          {project.name}
        </h1>

        <p className="w-fit text-xs rounded-full bg-accent-mauve/90 text-nav-foreground px-2.5 py-1">
          {project.status}
        </p>
      </div>

      <p className="text-foreground/85 leading-relaxed mb-4 italic">
        {project.summary}
      </p>

      <p className="text-foreground/75 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs rounded-full bg-accent-mauve/90 text-nav-foreground px-2.5 py-1"
          >
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
              className="rounded-full border border-foreground/30 px-5 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}