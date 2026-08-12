import { talents } from "@/content/data";

export default function TalentsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
      {talents.map((talent) => (
        <div key={talent.category} className="card card-hover group p-5">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-tangerine/25 text-forest transition-colors duration-300 group-hover:bg-tangerine/45">
            {talent.icon}
          </div>
          <h3 className="font-semibold text-forest">{talent.category}</h3>
        </div>
      ))}
    </div>
  );
}