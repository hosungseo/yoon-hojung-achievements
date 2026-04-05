"use client";

import { motion } from "framer-motion";

type Event = {
  day: string; // "MM.DD"
  title: string;
  desc?: string;
  tag?: string; // category label
  accent?: string; // tailwind text color
  highlight?: boolean;
};

type MonthGroup = {
  month: string; // "2025년 7월"
  yearMonth: string; // "2025.07" (sort key / header tag)
  events: Event[];
};

const chronology: MonthGroup[] = [
  {
    month: "2025년 7월",
    yearMonth: "2025.07",
    events: [
      {
        day: "07.19",
        title: "제5대 행정안전부 장관 취임",
        desc: "이재명 정부 초대 행안부 장관 · 정부세종청사 취임식",
        tag: "취임",
        accent: "text-amber-300",
        highlight: true,
      },
      {
        day: "07.19",
        title: "집중호우 중앙재난안전대책본부 주재",
        desc: "첫 공식 일정 · 임명 즉시 재난 현장 챙김",
        tag: "안전",
        accent: "text-red-300",
      },
    ],
  },
  {
    month: "2025년 8월",
    yearMonth: "2025.08",
    events: [
      {
        day: "08.26",
        title: "경찰국 폐지 공포·시행",
        desc: "2022.8 신설 이후 3년 만의 정상화",
        tag: "정부혁신",
        accent: "text-amber-300",
        highlight: true,
      },
    ],
  },
  {
    month: "2025년 9월",
    yearMonth: "2025.09",
    events: [
      {
        day: "09.12",
        title: "민생회복 소비쿠폰 2차 지급 방침 결정",
        desc: "전 국민 4,900만 명 · 9조원 규모",
        tag: "민생회복",
        accent: "text-orange-300",
      },
      {
        day: "09.22",
        title: "민생회복 소비쿠폰 2차 지급 개시",
        desc: "1차에 이어 골목상권 직접 지원",
        tag: "민생회복",
        accent: "text-orange-300",
      },
      {
        day: "09.26",
        title: "국가정보자원관리원 화재 발생",
        desc: "대전 UPS실 리튬이온 배터리 · 647개 시스템 마비",
        tag: "안전",
        accent: "text-red-300",
        highlight: true,
      },
    ],
  },
  {
    month: "2025년 10월",
    yearMonth: "2025.10",
    events: [
      {
        day: "10.27",
        title: "중앙지방협력회의 내실화",
        desc: "기회발전특구 추진방안 의결 등 실질 의결기구로 격상",
        tag: "지방",
        accent: "text-emerald-300",
      },
    ],
  },
  {
    month: "2025년 12월",
    yearMonth: "2025.12",
    events: [
      {
        day: "12.19",
        title: "2026년 행정안전부 주요업무 추진계획 발표",
        desc: "'국민 삶에 플러스, 행복안전부' 비전 공식화",
        tag: "행안부",
        accent: "text-indigo-300",
      },
      {
        day: "12.30",
        title: "국정자원 647개 시스템 전면 복구 완료",
        desc: "화재 발생 95일 만에 3개월 내 완전 복구",
        tag: "안전",
        accent: "text-red-300",
        highlight: true,
      },
    ],
  },
  {
    month: "2026년 1월",
    yearMonth: "2026.01",
    events: [
      {
        day: "01.02",
        title: "정부조직 대개편 시행",
        desc: "기재부 분리 · 기후에너지환경부 신설 · 검찰청 폐지 수순",
        tag: "정부혁신",
        accent: "text-amber-300",
        highlight: true,
      },
      {
        day: "01.08",
        title: "2026년 산하기관 업무보고 주재",
        desc: "정부세종청사 · 대국민 전 과정 공개",
        tag: "행안부",
        accent: "text-indigo-300",
      },
      {
        day: "01.19",
        title: "「정책플러스 토론회」 정례화 시작",
        desc: "실무 공무원이 주인공 · 위계 아닌 전문성",
        tag: "행안부",
        accent: "text-indigo-300",
      },
    ],
  },
  {
    month: "2026년 2월",
    yearMonth: "2026.02",
    events: [
      {
        day: "02.10",
        title: "설 연휴 범정부 안전관리대책 점검",
        desc: "정부서울청사 서울상황센터 주재",
        tag: "안전",
        accent: "text-red-300",
      },
      {
        day: "02.23",
        title: "경남 함양 산불 대응상황 점검회의",
        desc: "서울상황센터 주재 · 겨울철 재난 대응",
        tag: "안전",
        accent: "text-red-300",
      },
    ],
  },
  {
    month: "2026년 3월",
    yearMonth: "2026.03",
    events: [
      {
        day: "03.05",
        title: "제7차 중앙민관안전협력위원회",
        desc: "정부세종청사 · 민·관 합동 대응체계 강화",
        tag: "안전",
        accent: "text-red-300",
      },
      {
        day: "03.09",
        title: "AI 국민비서 시범서비스 개통식",
        desc: "판교 · 네이버·카카오 연동 · 등본 발급 15초",
        tag: "AI",
        accent: "text-cyan-300",
        highlight: true,
      },
      {
        day: "03.10",
        title: "AI 딥페이크 탐지 분석모델 시연회",
        desc: "정부서울청사 · 민간 AI 기술 공공 도입",
        tag: "AI",
        accent: "text-cyan-300",
      },
      {
        day: "03.11",
        title: "BTS 컴백 인파 안전관리 대책회의",
        desc: "정부서울청사 · 관계기관 합동",
        tag: "안전",
        accent: "text-red-300",
      },
      {
        day: "03.12",
        title: "일본 방문 (~3.15)",
        desc: "공공부문 AI 전환 · 지역재생 · 재난관리 협력",
        tag: "AI",
        accent: "text-cyan-300",
      },
      {
        day: "03.16",
        title: "행정안전부·산림청 합동 산불예방 캠페인",
        desc: "대구 앞산공원 · 현장 시민 소통",
        tag: "안전",
        accent: "text-red-300",
      },
      {
        day: "03.24",
        title: "「중대범죄수사청법」 국무회의 통과",
        desc: "78년 만의 수사·기소 분리 법제화",
        tag: "정부혁신",
        accent: "text-amber-300",
        highlight: true,
      },
      {
        day: "03.24",
        title: "행안부-기아 지방소멸 대응 상생협약",
        desc: "식품사막화 해결 위한 기업 협력",
        tag: "지방",
        accent: "text-emerald-300",
      },
      {
        day: "03.25",
        title: "광주 사회적경제지원센터 방문",
        desc: "사회연대경제기본법 추진 현장 점검",
        tag: "민주주의",
        accent: "text-violet-300",
      },
      {
        day: "03.29",
        title: "제주 마을공동체 우수사례 방문",
        desc: "구좌읍 세화리 · 지역 공동체 모델",
        tag: "지방",
        accent: "text-emerald-300",
      },
      {
        day: "03.30",
        title: "제주 고향사랑기부·마약 현장점검",
        desc: "수산물 제공업체 · 제주국제공항",
        tag: "안전",
        accent: "text-red-300",
      },
    ],
  },
  {
    month: "2026년 4월 이후",
    yearMonth: "2026.04+",
    events: [
      {
        day: "07.01",
        title: "전남광주통합특별시 출범 (예정)",
        desc: "40년 만의 재결합 · 인구 320만 · 1호 통합특별시",
        tag: "지방",
        accent: "text-emerald-300",
        highlight: true,
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#0b0f19] py-32 text-white md:py-48"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-6 text-xs font-bold tracking-[0.3em] text-amber-300">
            CHRONOLOGY
          </div>
          <h2 className="text-headline text-[clamp(2.25rem,6vw,5rem)] text-balance">
            제도로 남는 성과
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
            제5대 행정안전부 장관 취임부터 전남광주통합특별시 출범까지,
            하루하루를 기록합니다.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {chronology.map((group) => (
            <motion.section
              key={group.yearMonth}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Month header */}
              <div className="mb-6 flex items-baseline gap-4 border-b border-white/10 pb-4 md:mb-8">
                <div className="text-[10px] font-bold tracking-[0.3em] text-amber-300/70 md:text-xs">
                  {group.yearMonth}
                </div>
                <h3 className="text-xl font-bold md:text-2xl">{group.month}</h3>
                <div className="ml-auto text-[10px] opacity-40 md:text-xs">
                  {group.events.length} {group.events.length > 1 ? "events" : "event"}
                </div>
              </div>

              {/* Event grid */}
              <ol className="grid gap-3 md:grid-cols-2 md:gap-4">
                {group.events.map((e, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className={`relative border-l-2 bg-white/[0.02] p-4 transition hover:bg-white/[0.04] md:p-5 ${
                      e.highlight
                        ? `${e.accent?.replace("text-", "border-") ?? "border-amber-300"}`
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`text-xs font-bold tracking-widest ${e.accent ?? "text-white/80"}`}
                      >
                        {e.day}
                      </div>
                      {e.tag && (
                        <div
                          className={`border px-2 py-0.5 text-[9px] font-bold tracking-[0.15em] ${
                            e.accent?.replace("text-", "border-") ?? "border-white/20"
                          } ${e.accent ?? "text-white/60"}`}
                        >
                          {e.tag}
                        </div>
                      )}
                      {e.highlight && (
                        <div
                          className={`ml-auto text-[9px] font-bold tracking-widest ${e.accent ?? "text-amber-300"}`}
                        >
                          ★
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-base font-bold leading-snug md:text-lg">
                      {e.title}
                    </div>
                    {e.desc && (
                      <div className="mt-1.5 text-xs leading-relaxed opacity-60 md:text-sm">
                        {e.desc}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
