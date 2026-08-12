import { testimonials } from "@/content/data";

export default function Testimonials() {
  return (
    <div>
      <h2 className="heading-section heading-accent mb-8">What People Are Saying</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="card card-hover p-7 mx-auto max-w-sm flex flex-col items-center text-center">
            <img
              src={t.avatar}
              alt={`Avatar of ${t.name}`}
              className="w-14 h-14 rounded-full mb-4 ring-2 ring-gold/60 ring-offset-2 ring-offset-paper object-cover"
            />
            <div className="mb-3">
              <p className="font-semibold text-forest">{t.name}</p>
              <p className="text-xs text-ink-soft mb-3">{t.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft italic">&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
