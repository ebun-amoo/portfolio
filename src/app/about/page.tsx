import { about } from "@/content/data";
import PhotoSlider from "@/components/PhotoSlider";
import CTA from "@/components/cta";

export const metadata = { title: "About — Ebunoluwa Amoo" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <p className="text-sm uppercase tracking-wide text-foreground/60 mb-3">About Me</p>
        <p className="font-display text-2xl sm:text-3xl leading-snug">I build with <b>intention</b>. <br/> Creating technology that brings <b>people</b> closer, solves <b>real problems</b>, and sparks lasting <b>impact</b>.</p>
      </section>

      <section className="py-16 border-y border-border-subtle">
        <PhotoSlider />
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
          {about.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold mb-3">{section.heading}</h2>
              <p className="leading-relaxed text-foreground/85">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
