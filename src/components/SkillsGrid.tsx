import { skills } from "@/content/data";

export default function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 md:justify-around gap-8">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-display font-semibold text-forest mb-3">{skill.category}</h3>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            {skill.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
