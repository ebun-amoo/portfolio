import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} — Ebunoluwa Amoo` : "Project not found" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="text-sm underline underline-offset-4 hover:text-accent-dark">
        ← All projects
      </Link>

      <div className="aspect-video rounded-2xl bg-accent-dark/90 mt-6 mb-8" />

      <h1 className="font-display text-3xl font-semibold mb-4">{project.name}</h1>
      <p className="text-foreground/85 leading-relaxed mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs rounded-full bg-accent-mauve/90 text-nav-foreground px-2.5 py-1">
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
