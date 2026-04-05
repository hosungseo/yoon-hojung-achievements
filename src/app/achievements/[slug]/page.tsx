import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/achievements";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) notFound();

  const prev =
    categories[(categories.indexOf(category) - 1 + categories.length) % categories.length];
  const next =
    categories[(categories.indexOf(category) + 1) % categories.length];

  return (
    <main className={`min-h-screen ${category.color.bg} ${category.color.text}`}>
      {/* Header bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
          <Link
            href="/"
            className="text-xs font-bold tracking-widest opacity-60 transition hover:opacity-100"
          >
            ← 메인으로
          </Link>
          <div
            className={`text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
          >
            {category.badge}
          </div>
        </div>
      </header>

      {/* Hero of this category */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-40">
        <div
          className={`mb-8 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
        >
          CATEGORY {String(category.order).padStart(2, "0")}
        </div>
        <h1 className="text-display text-[clamp(2.5rem,7vw,6rem)] text-balance">
          {category.tagline}
        </h1>
        <p className="mt-10 max-w-3xl text-lg opacity-80 md:text-xl">
          {category.intro}
        </p>
      </section>

      {/* Achievement list */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
          <div className="space-y-24">
            {category.achievements.map((a, i) => (
              <article
                key={a.id}
                className="grid gap-10 border-b border-white/10 pb-24 last:border-0 last:pb-0 md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <div
                    className={`text-xs font-bold tracking-widest ${category.color.accent}`}
                  >
                    {String(i + 1).padStart(2, "0")} · {category.title}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-tight md:text-4xl">
                    {a.title}
                  </h2>
                </div>
                <div>
                  <p className="text-lg font-semibold opacity-90">{a.lead}</p>
                  <p className="mt-6 text-base leading-relaxed opacity-75 md:text-lg">
                    {a.description}
                  </p>
                  {a.impact && (
                    <div className="mt-8 border-l-2 border-white/30 pl-6">
                      <div className="text-xs font-bold tracking-widest opacity-60">
                        IMPACT
                      </div>
                      <div
                        className={`mt-2 text-base font-semibold ${category.color.accent}`}
                      >
                        {a.impact}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prev/Next nav */}
      <nav className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:px-12">
          <Link
            href={`/achievements/${prev.id}`}
            className="flex flex-col gap-2 border-r border-white/10 py-12 transition hover:opacity-80"
          >
            <span className="text-xs font-bold tracking-widest opacity-50">
              ← PREV
            </span>
            <span className="text-xl font-bold md:text-2xl">{prev.title}</span>
          </Link>
          <Link
            href={`/achievements/${next.id}`}
            className="flex flex-col items-end gap-2 py-12 transition hover:opacity-80"
          >
            <span className="text-xs font-bold tracking-widest opacity-50">
              NEXT →
            </span>
            <span className="text-xl font-bold md:text-2xl">{next.title}</span>
          </Link>
        </div>
      </nav>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs opacity-40 md:px-12">
          © 2026 MOIS · Unofficial Archive
        </div>
      </footer>
    </main>
  );
}
