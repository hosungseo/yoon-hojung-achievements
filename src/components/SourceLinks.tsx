import type { Source } from "@/data/achievements";

type Props = {
  sources?: Source[];
  accent: string;
  compact?: boolean;
  limit?: number;
};

/**
 * Compact inline list of press/briefing sources attached to an achievement.
 * Renders nothing when no sources are present, so it's safe to drop into any
 * card layout.
 */
export default function SourceLinks({
  sources,
  accent,
  compact = false,
  limit,
}: Props) {
  if (!sources || sources.length === 0) return null;
  const items = typeof limit === "number" ? sources.slice(0, limit) : sources;

  if (compact) {
    return (
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
        {items.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1 underline-offset-4 hover:underline ${accent}`}
            title={s.label}
          >
            <span className="opacity-60 group-hover:opacity-100">
              {s.publisher}
            </span>
            <span aria-hidden className="opacity-40">
              ↗
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className="mt-5 space-y-1.5 border-l-2 border-current/20 pl-3 text-xs">
      {items.map((s, i) => (
        <li key={i}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-start gap-2 leading-snug hover:underline ${accent}`}
          >
            <span aria-hidden className="mt-0.5 opacity-50">
              →
            </span>
            <span className="flex-1">
              <span className="opacity-90 group-hover:opacity-100">
                {s.label}
              </span>
              <span className="ml-1.5 whitespace-nowrap text-[10px] opacity-50">
                · {s.publisher}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
