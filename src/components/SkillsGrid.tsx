import { skills } from "@/content/data";

export default function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 md:justify-around gap-8">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-display font-semibold text-accent-dark mb-3">{skill.category}</h3>
          <ul className="space-y-1.5 text-sm text-foreground/85">
            {skill.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
