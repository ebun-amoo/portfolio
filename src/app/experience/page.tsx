import { experience, education, awards } from "@/content/data";
import SkillsGrid from "@/components/SkillsGrid";
import CTA from "@/components/cta";
import PatternAccent from "@/components/PatternAccent";

export const metadata = { title: "Experience — Ebunoluwa Amoo" };

export default function ExperiencePage() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <PatternAccent
          variant="loop"
          className="-right-8 top-32 hidden md:block"
          color="var(--sage)"
          opacity={0.07}
        />
        <h1 className="heading-section heading-accent mb-8">Work Experience</h1>
        <ol className="space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}-${job.period}`} className="timeline-item border-l-2 border-sage/40 pl-6">
              <p className="font-display font-semibold text-forest">{job.role}</p>
              <p className="text-sm text-ink-soft mb-3">
                {job.company} &middot; {job.period}
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-ink/80">
                {job.impact.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="heading-section heading-accent mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.degree} className="card p-6">
                <p className="font-semibold text-forest">{ed.degree}</p>
                <p className="text-sm text-ink-soft">
                  {ed.school} &middot; {ed.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="heading-section heading-accent mb-6">Skills</h2>
          <SkillsGrid />
        </div>
      </section>

      <section className="border-t border-line bg-paper/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="heading-section heading-accent mb-6">Leadership & Awards</h2>
          <ol className="rounded-2xl bg-forest text-cream p-8 space-y-2.5 list-decimal list-inside">
            {awards.map((award) => (
              <li key={award.title}>
                <span className="font-medium text-gold">{award.title}</span>
                <span className="text-cream/75"> — {award.org}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
