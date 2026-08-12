import { about } from "@/content/data";
import PhotoSlider from "@/components/PhotoSlider";
import CTA from "@/components/cta";
import PatternAccent from "@/components/PatternAccent";

export const metadata = { title: "About — Ebunoluwa Amoo" };

export default function AboutPage() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <p className="label-eyebrow mb-3">About Me</p>
        <p className="font-display text-2xl sm:text-3xl leading-snug">
          I build with <b className="text-forest">intention</b>. <br/> Creating technology that brings <b className="text-sage">people</b> closer, solves <b className="text-rust">real problems</b>, and sparks lasting <b className="text-tangerine">impact</b>.
        </p>
      </section>

      <section className="relative py-16 border-y border-line">
        <PatternAccent
          variant="wave"
          className="-left-8 -top-10"
          color="var(--gold)"
          opacity={0.07}
          rotate={-10}
        />
        <PhotoSlider />
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
          {about.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="heading-section heading-accent mb-3">{section.heading}</h2>
              <p className="leading-relaxed text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
