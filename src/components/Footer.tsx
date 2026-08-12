import Link from "next/link";
import { profile } from "@/content/data";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import PatternAccent from "./PatternAccent";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-forest text-cream">
      <PatternAccent
        variant="wave"
        className="-right-10 -top-6 rotate-12"
        color="var(--gold)"
        opacity={0.07}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">
              {profile.name}
            </p>
            <p className="text-sm text-cream/70">{profile.title}</p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cream/80 transition-colors hover:text-gold"
            >
              <span className="hidden md:block">LinkedIn</span>
              <span className="md:hidden block"><FaLinkedin className="w-5 h-5" /></span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-cream/80 transition-colors hover:text-gold"
            >
              <span className="hidden md:block">GitHub</span>
              <span className="md:hidden block"><FaGithub className="w-5 h-5" /></span>
            </a>
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="text-cream/80 transition-colors hover:text-gold"
            >
              <span className="hidden md:block">Medium</span>
              <span className="md:hidden block"><FaMedium className="w-5 h-5" /></span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-cream/80 transition-colors hover:text-gold"
            >
              <span className="hidden md:block">Email</span>
              <span className="md:hidden block"><MdEmail className="w-5 h-5" /></span>
            </a>
          </div>

          <Link
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Download Resume
          </Link>
        </div>

        <hr className="my-8 border-cream/15" />

        <p className="text-center text-xs text-cream/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
