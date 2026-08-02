import Link from "next/link";
import { profile } from "@/content/data";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold">{profile.name}</p>
            <p className="text-sm text-foreground/70">{profile.title}</p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-dark transition-colors underline underline-offset-4"
            >
              <span className="hidden md:block">LinkedIn</span>
              <span className="md:hidden block"><FaLinkedin className="w-5 h-5" /></span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-dark transition-colors underline underline-offset-4"
            >
              <span className="hidden md:block">GitHub</span>
              <span className="md:hidden block"><FaGithub className="w-5 h-5" /></span>
            </a>
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="hover:text-accent-dark transition-colors underline underline-offset-4"
            >
              <span className="hidden md:block">Medium</span>
              <span className="md:hidden block"><FaMedium className="w-5 h-5" /></span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-accent-dark transition-colors underline underline-offset-4"
            >
              <span className="hidden md:block">Email</span>
              <span className="md:hidden block"><MdEmail className="w-5 h-5" /></span>
            </a>
          </div>

          <Link
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-button-dark text-nav-foreground px-5 py-2.5 text-sm font-medium text-center hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-dark"
          >
            Download Resume
          </Link>
        </div>

        <hr className="my-8 border-border-subtle" />

        <p className="text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
