import { projects } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/cta";

export const metadata = {
  title: "Projects — Ebunoluwa Amoo",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <h1 className="font-display text-2xl font-semibold mb-10">
          Things I&apos;ve built
        </h1>

        <div className="grid sm:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}