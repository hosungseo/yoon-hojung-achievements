// 윤호중 행정안전부 장관 주요 성과 데이터
// 대외 공식 홍보용 — 목차 기반 초안 (세부 내용은 검수·보강 필요)

export type Achievement = {
  id: string;
  title: string;
  lead: string;
  description: string;
  impact?: string;
};

export type Category = {
  id: string;
  order: number;
  badge: string; // 짧은 라벨
  title: string; // 한국어 카테고리 명
  tagline: string; // 섹션 헤드라인
  intro: string; // 섹션 도입 문구
  color: {
    bg: string; // Tailwind bg 클래스
    text: string;
    accent: string;
  };
  achievements: Achievement[];
};

export const categories: Category[] = [
  {
    id: "gov-reform",
    order: 1,
    badge: "01 / 정부혁신",
    title: "정부혁신",
    tagline: "국민주권 정부를 제도로 뒷받침하다",
    intro:
      "정부조직 개편부터 검·경 역할 재정립까지, 국민주권 정부의 성과 창출을 뒷받침할 제도적 기반을 마련했습니다.",
    color: {
      bg: "bg-slate-950",
      text: "text-white",
      accent: "text-amber-300",
    },
    achievements: [
      {
        id: "gov-reorg",
        title: "정부조직 개편 추진",
        lead: "기능 재편안 수립 및 법안 발의",
        description:
          "국민주권 정부의 성과 창출을 뒷받침하기 위해 정부 기능 재편안을 마련하고 관련 법안 추진을 주도했습니다.",
      },
      {
        id: "police-reform",
        title: "경찰국 폐지 · 중대재해수사청(안) 제정",
        lead: "검찰 편의 의존에서 본래 역할로",
        description:
          "검찰과 경찰이 각자의 본래 역할로 돌아갈 수 있도록 경찰국 폐지를 관철하고, 중대재해 수사 전담기관 설립을 위한 제정안을 마련했습니다.",
      },
      {
        id: "legacy-reform",
        title: "과거 불합리한 관행 · 시스템 개선",
        lead: "정부 최초 선례 TF 가동",
        description:
          "관행적으로 굳어진 비효율과 불합리를 걷어내기 위해 정부 최초의 선례 개선 TF를 가동하고, 조직문화 개선을 추진했습니다.",
      },
    ],
  },
  {
    id: "decentralization",
    order: 2,
    badge: "02 / 지방분권",
    title: "지방분권 · 균형발전",
    tagline: "권한은 더해주고, 동행할 파트너로",
    intro:
      "광역특례시 개설, 중앙지방협력회의 개편, 지역사랑상품권 국가지원 의무화까지 — 지방이 주도하는 균형발전의 제도적 토대를 다졌습니다.",
    color: {
      bg: "bg-[#0b3d2e]",
      text: "text-white",
      accent: "text-emerald-300",
    },
    achievements: [
      {
        id: "local-special-city",
        title: "광역 특례시 개설",
        lead: "광역행정 기반의 새로운 도시 모델",
        description:
          "특별행정 균형성장과 대도시 행정기반을 확충하기 위해 광역 특례시 개설을 추진했습니다.",
      },
      {
        id: "central-local-council",
        title: "중앙지방협력회의 개편",
        lead: "지방과 함께 국정 의제를 논의",
        description:
          "중앙과 지방이 대등한 파트너로 협력할 수 있도록 협력회의 구조와 운영 방식을 개편했습니다.",
      },
      {
        id: "local-gift-certificate",
        title: "지역사랑상품권 국가지원 의무화",
        lead: "민생회복의 지역 엔진",
        description:
          "지역 골목상권과 민생회복을 뒷받침하기 위해 지역사랑상품권에 대한 국가 지원을 제도적으로 의무화했습니다.",
      },
    ],
  },
  {
    id: "digital-ai",
    order: 3,
    badge: "03 / 디지털 · AI",
    title: "AI · 디지털정부",
    tagline: "세계 최고의 AI 민주정부",
    intro:
      "국민 삶에 플러스가 되는 세계 최고 'AI 민주정부'를 목표로, 국민비서부터 정부24까지 공공서비스 전 영역에 AI를 도입하고 있습니다.",
    color: {
      bg: "bg-[#0a1a3a]",
      text: "text-white",
      accent: "text-cyan-300",
    },
    achievements: [
      {
        id: "ai-secretary",
        title: "AI 국민비서 도입",
        lead: "개인 맞춤형 공공서비스 안내",
        description:
          "AI 기반의 국민비서를 도입해 국민 개개인이 필요한 행정 서비스를 맞춤형으로 안내받을 수 있도록 했습니다.",
      },
      {
        id: "ai-gov24",
        title: "AI 정부24 구축",
        lead: "모든 공공서비스의 통합 관문",
        description:
          "정부24를 AI 기반으로 재구축해 국민이 한 곳에서 모든 공공서비스를 편리하게 이용할 수 있는 통합 관문으로 발전시켰습니다.",
      },
      {
        id: "digital-future",
        title: "제3기 전파위 출범",
        lead: "책임 있는 미래 전략",
        description:
          "책임 있는 미래 전략과 과학기술 과제를 해결해 나가기 위해 제3기 전파위원회를 출범시켰습니다.",
      },
    ],
  },
  {
    id: "safety",
    order: 4,
    badge: "04 / 재난안전",
    title: "재난 · 안전",
    tagline: "국민 안전은 국가의 제1책무",
    intro:
      "재난안전 종사자의 처우부터 자연재난 종합대책까지, 국민 안전을 최우선에 두는 정부의 책무를 실질로 구현했습니다.",
    color: {
      bg: "bg-[#3a0f0f]",
      text: "text-white",
      accent: "text-orange-300",
    },
    achievements: [
      {
        id: "safety-workers",
        title: "재난안전 종사자 처우 개선",
        lead: "현장 최전선을 든든하게",
        description:
          "재난 현장에서 국민 생명과 안전을 지키는 종사자들의 처우와 근무 여건을 실질적으로 개선했습니다.",
      },
      {
        id: "natural-disaster",
        title: "자연재난 종합대책 발표",
        lead: "기후 위기 시대의 예방·대응",
        description:
          "기후변화로 점증하는 자연재난에 선제 대응할 수 있는 종합대책을 수립·발표했습니다.",
      },
    ],
  },
  {
    id: "public-safety",
    order: 5,
    badge: "05 / 민생치안",
    title: "민생치안",
    tagline: "민생 범죄는 무관용 원칙으로",
    intro:
      "보이스피싱, 마약 등 국민 생활을 위협하는 민생 범죄에 대해 '무관용 원칙'으로 강력하게 대응하고 있습니다.",
    color: {
      bg: "bg-[#2a0a2a]",
      text: "text-white",
      accent: "text-pink-300",
    },
    achievements: [
      {
        id: "drug-special-unit",
        title: "마약 · 민생범죄 특별수사단 신설",
        lead: "전담 역량 집중",
        description:
          "마약과 민생범죄 대응을 위한 특별수사단을 신설해 수사 역량을 집중하고 실질 성과를 창출했습니다.",
      },
      {
        id: "child-protection",
        title: "지역 어린이 보호 중점사업",
        lead: "안전한 동네를 넘어 안전한 일상",
        description:
          "지역 어린이의 등하굣길과 생활공간 안전을 위한 보호 중점사업을 추진했습니다.",
      },
    ],
  },
  {
    id: "social-economy",
    order: 6,
    badge: "06 / 사회연대경제",
    title: "사회연대경제",
    tagline: "자립의 해답, 사회연대경제",
    intro:
      "지방소멸과 사회적 고립의 해법으로 사회연대경제를 제도화하고, 지역이 스스로 일어설 수 있는 생태계를 조성하고 있습니다.",
    color: {
      bg: "bg-[#3b2a10]",
      text: "text-white",
      accent: "text-yellow-300",
    },
    achievements: [
      {
        id: "social-economy-law",
        title: "「사회연대경제기본법」 등 제도 기반 마련",
        lead: "자립 생태계의 법적 토대",
        description:
          "사회연대경제 기본법 제정을 포함한 제도적 기반을 구축해 지방소멸 대응과 자립형 지역경제의 토대를 마련했습니다.",
      },
    ],
  },
  {
    id: "communication",
    order: 7,
    badge: "07 / 소통",
    title: "국민 · 현장과의 소통",
    tagline: "현장에서 답을 찾다",
    intro:
      "국회·언론·국민 현장을 가리지 않고, 장관이 직접 소통하며 정책의 체감도를 높이고 있습니다.",
    color: {
      bg: "bg-[#1a1a2e]",
      text: "text-white",
      accent: "text-indigo-300",
    },
    achievements: [
      {
        id: "apec-gwangju",
        title: "광주 APEC 성공 개최 지원",
        lead: "현장 답사와 실무 점검",
        description:
          "광주 APEC 정상회의의 성공 개최를 위해 직접 현장을 답사하고 관계기관과 실무 협의를 이끌었습니다.",
      },
      {
        id: "jeju-43",
        title: "제주 4·3 등 과거사 현장",
        lead: "국가의 책임을 기억하다",
        description:
          "제주 4·3을 비롯한 과거사 현장을 찾아 피해자와 유가족을 위로하고 국가의 책임을 확인했습니다.",
      },
      {
        id: "press-briefing",
        title: "정례 기자간담회 · 브리핑",
        lead: "공식 기자간담회 및 수시 소통",
        description:
          "정책 결정과 현장 행정 전반에 대해 기자간담회와 수시 브리핑으로 투명하게 설명하고 있습니다.",
      },
      {
        id: "union-talks",
        title: "직원 · 노조 소통",
        lead: "MZ 노조 · 직원 간담회 정례화",
        description:
          "MZ 노조와의 간담회, 직원 격려 간담 등을 정례화해 조직 내부의 목소리를 정책에 반영하고 있습니다.",
      },
    ],
  },
];

export const heroStats = [
  { value: "7", label: "핵심 성과 영역" },
  { value: "20+", label: "주요 추진 과제" },
  { value: "1호", label: "정부조직 개편 추진" },
  { value: "AI", label: "민주정부 실현" },
];
