import { talents } from "@/content/data";

export default function TalentsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {talents.map((talent) => (
        <div key={talent.category} className="group rounded-xl border border-border-subtle p-6 transition-all duration-300 hover:bg-accent-mauve/10 hover:border-accent-mauve hover:-translate-y-1">
          <div className="mb-4 text-foreground transition-colors group-hover:text-accent-mauve">
              {talent.icon}
          </div>

          <h3 className="font-medium">
              {talent.category}
          </h3>
      </div>
      ))}
    </div>
  );
}
