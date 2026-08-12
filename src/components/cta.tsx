import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden divider-top">
      <div className="mx-auto max-w-3xl px-6 py-16 flex flex-wrap gap-4 justify-center">
        <Link href="/projects" className="btn btn-primary">
          Explore my work
        </Link>
        <a href="mailto:ebunoluwaamoo@gmail.com" className="btn btn-outline">
          Get in touch
        </a>
      </div>
    </section>
  );
}
