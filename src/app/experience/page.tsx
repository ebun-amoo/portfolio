import { experience, education, awards } from "@/content/data";
import SkillsGrid from "@/components/SkillsGrid";
import CTA from "@/components/cta";

export const metadata = { title: "Experience — Ebunoluwa Amoo" };

export default function ExperiencePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <h1 className="font-display text-2xl font-semibold mb-8">Work Experience</h1>
        <ol className="space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}-${job.period}`} className="border-l-2 border-accent-dark pl-5">
              <p className="font-display font-semibold">{job.role}</p>
              <p className="text-sm text-foreground/70 mb-3">
                {job.company} &middot; {job.period}
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-foreground/85">
                {job.impact.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.degree}>
                <p className="font-medium">{ed.degree}</p>
                <p className="text-sm text-foreground/70">
                  {ed.school} &middot; {ed.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold mb-6">Skills</h2>
          <SkillsGrid />
        </div>
      </section>

      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold mb-6">Leadership &amp; Awards</h2>
          <ol className="rounded-xl bg-accent-dark text-nav-foreground p-6 space-y-2 list-decimal list-inside">
            {awards.map((award) => (
              <li key={award.title}>
                <span className="font-medium">{award.title}</span> — {award.org}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
