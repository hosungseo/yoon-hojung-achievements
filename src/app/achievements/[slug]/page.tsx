import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/achievements";
import ImageSlot from "@/components/ImageSlot";
import PhotoPair from "@/components/PhotoPair";
import { asset } from "@/lib/asset";

// id → photo filename prefix (01~07). Keep in sync with public/photos/*.
const photoPrefixByCategory: Record<string, string> = {
  "gov-reform": "01-gov-reform",
  "livelihood-recovery": "02-livelihood",
  decentralization: "03-decentralization",
  "ai-democracy": "04-ai-democracy",
  "public-safety": "05-public-safety",
  "democracy-restoration": "06-democracy",
  "new-ministry": "07-new-ministry",
};

const heroCaptionByCategory: Record<string, string> = {
  "gov-reform": "정부서울청사 서울상황센터 회의 주재",
  "livelihood-recovery": "마을공동체 우수사례 현장방문",
  decentralization: "행안부-기아 지방소멸 대응 상생협약 체결",
  "ai-democracy": "AI 딥페이크 탐지 분석모델 시연회",
  "public-safety": "행정안전부·산림청 합동 산불예방 캠페인",
  "democracy-restoration": "사회연대경제 정책 현장 방문",
  "new-ministry": "고향사랑기부 및 마약범죄 근절 현장점검",
};

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

  const photoPrefix = photoPrefixByCategory[category.id];
  const heroCaption = heroCaptionByCategory[category.id];

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
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
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

        {photoPrefix && (
          <div className={`mt-16 ${category.color.accent}`}>
            <ImageSlot
              label={`${String(category.order).padStart(2, "0")} · ${category.title.toUpperCase()}`}
              caption={heroCaption ?? category.tagline}
              accent={category.color.accent}
              src={asset(`/photos/${photoPrefix}.jpg`)}
              alt={`${category.title} · ${heroCaption ?? ""}`}
              credit="출처 : 행정안전부 · 정책브리핑"
              aspect="aspect-[16/7]"
            />
          </div>
        )}
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
                  {a.sources && a.sources.length > 0 && (
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <div className="text-xs font-bold tracking-widest opacity-60">
                        SOURCES
                      </div>
                      <ul className="mt-3 space-y-2 text-sm">
                        {a.sources.map((s, si) => (
                          <li key={si} className="flex gap-2 opacity-75 hover:opacity-100">
                            <span className="opacity-50">[{si + 1}]</span>
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                            >
                              {s.label}
                            </a>
                            <span className="opacity-50">· {s.publisher}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting photo pair */}
      {photoPrefix && (
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
            <div
              className={`mb-10 text-xs font-bold tracking-[0.3em] ${category.color.accent}`}
            >
              FIELD PHOTOS
            </div>
            <div className={category.color.accent}>
              <PhotoPair
                accent={category.color.accent}
                credit="출처 : 행정안전부 · 정책브리핑"
                photos={[
                  {
                    src: asset(`/photos/${photoPrefix}-2.jpg`),
                    alt: `${category.title} 현장 사진`,
                    caption: "FIELD",
                  },
                  {
                    src: asset(`/photos/${photoPrefix}-3.jpg`),
                    alt: `${category.title} 관련 사진`,
                    caption: "DIALOGUE",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      )}

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
