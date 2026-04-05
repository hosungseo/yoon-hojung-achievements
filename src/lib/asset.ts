// Next.js `basePath` only rewrites framework assets; files in `public/` must
// be prefixed manually when basePath is set. Keep this in sync with next.config.ts.
const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/yoon-hojung-achievements" : "";

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
