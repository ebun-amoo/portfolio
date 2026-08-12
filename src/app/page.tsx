import Link from "next/link";
import { profile, projects } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import TalentsGrid from "@/components/TalentsGrid";
import PatternAccent from "@/components/PatternAccent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
        <PatternAccent
          variant="spiral"
          className="-right-8 top-24 hidden md:block"
          color="var(--sage)"
          opacity={0.07}
        />
        <p className="font-display text-2xl sm:text-3xl leading-snug max-w-4xl">
          {profile.heroBlurb}
        </p>
        <Link href="/about" className="btn btn-primary mt-8">
          More about me
        </Link>
      </section>

      {/* Selected projects */}
      <section className="relative border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="heading-section heading-accent">
              Selected Projects{" "}
              <span className="text-sage font-sans text-base font-normal">({projects.length})</span>
            </h2>
            <Link href="/projects" className="link-editorial text-sm">
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

      {/* Expertise */}
      <section className="relative border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="heading-section heading-accent mb-8">Expertise</h2>
          <TalentsGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-line bg-paper/50">
        <PatternAccent
          variant="curl"
          className="-left-10 bottom-10"
          color="var(--gold)"
          opacity={0.07}
          rotate={-20}
        />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Testimonials />
          <div className="mt-10 flex justify-center">
            <Link
              href="https://calendly.com/ebunoluwaamoo/let-s-connect"
              className="btn btn-accent"
            >
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
              <span>Book a 15 mins call</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}