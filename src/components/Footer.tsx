export default function Footer() {
  return (
    <footer className="bg-[#05070d] py-16 text-white/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-6">
          <div>
            <div className="text-sm font-bold tracking-widest text-amber-300">
              MOIS · 2026
            </div>
            <div className="mt-4 text-2xl font-black text-white">
              행정안전부 장관 · 주요 성과
            </div>
            <p className="mt-4 max-w-md text-sm">
              이 페이지는 윤호중 행정안전부 장관의 주요 성과를 공식 기록으로
              정리한 대외 홍보 페이지입니다.
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

        <div className="mt-16 border-t border-white/10 pt-8 text-xs">
          © 2026 Ministry of the Interior and Safety, Republic of Korea ·
          Unofficial Archive
        </div>
      </div>
    </footer>
  );
}
