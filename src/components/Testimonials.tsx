import { testimonials } from "@/content/data";

export default function Testimonials() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-8">What People Are Saying</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl bg-accent-dark text-nav-foreground p-5 mx-auto max-w-sm flex flex-col items-center text-center shadow-md">
            <img
              src={t.avatar}
              alt={`Avatar of ${t.name}`}
              className="w-12 h-12 rounded-full mb-2"
            />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-xs text-nav-foreground/70 mb-3">{t.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-nav-foreground/90 italic">&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
