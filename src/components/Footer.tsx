import ShareButtons from "./ShareButtons";

export default function Footer() {
  return (
    <footer className="bg-[#05070d] py-16 text-white/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 border-b border-white/10 pb-16">
          <ShareButtons />
        </div>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-6">
          <div>
            <div className="text-sm font-bold tracking-widest text-amber-300">
              MOIS · 2026
            </div>
            <div className="mt-4 text-2xl font-black text-white">
              행정안전부 장관 · 주요 성과
            </div>
            <p className="mt-4 max-w-md text-sm">
              본 페이지는 공개된 보도자료·정부 발표 자료를 토대로 정리한
              비공식 아카이브이며, 행정안전부의 공식 홈페이지가 아닙니다.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm md:text-right">
            <div>
              <div className="text-xs font-bold tracking-widest text-white/40">
                OFFICIAL
              </div>
              <a
                href="https://www.mois.go.kr"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block hover:text-white"
              >
                행정안전부 공식 홈페이지 →
              </a>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-white/40">
                NEWSROOM
              </div>
              <a
                href="https://www.korea.kr"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block hover:text-white"
              >
                정책브리핑 →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs leading-relaxed">
          <p>
            이미지 출처: 행정안전부 · 대한민국 정책브리핑(korea.kr) — 저작권자의
            사전 협의를 거쳐 사용하였습니다.
          </p>
          <p className="mt-2 text-white/40">
            © 2026 · Unofficial Archive · Not an official website of the
            Ministry of the Interior and Safety.
          </p>
        </div>
      </div>
    </footer>
  );
}
