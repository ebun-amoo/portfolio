import Link from "next/link";
import { profile, projects } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import TalentsGrid from "@/components/TalentsGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <p className="font-display text-2xl sm:text-3xl leading-snug max-w-4xl">
          {profile.heroBlurb}
        </p>
        <Link
          href="/about"
          className="inline-block mt-6 rounded-md bg-nav text-nav-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav"
        >
          More about me
        </Link>
      </section>

      {/* Selected projects */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-xl font-semibold">
              Selected Projects <span className="text-foreground/50">({projects.length})</span>
            </h2>
            <Link href="/projects" className="text-sm underline underline-offset-4 hover:text-accent-dark">
              View all
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise — mirrors the Experience page Skills section */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold mb-8">Expertise</h2>
          <TalentsGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Testimonials />
          <Link
          href="https://calendly.com/ebunoluwaamoo/let-s-connect"
          className="inline-block mt-6 rounded-md bg-nav text-nav-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav"
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
            <span>Book a 15 mins call</span>
          </div>
        </Link>
        </div>
      </section>
    </>
  );
}
