import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-6 py-12 flex flex-wrap gap-6 justify-center">
          <Link
            href="/projects"
            className="rounded-md border border-foreground/30 px-10 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Explore my work
          </Link>
          <a
            href="mailto:ebunoluwaamoo@gmail.com"
            className="rounded-md border border-foreground/30 px-10 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
  );
}
