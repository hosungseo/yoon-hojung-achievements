// 윤호중 행정안전부 장관 주요 성과 데이터
// 공식 목차(정밀 OCR) + 공개 보도·정책브리핑 교차검증 기반
// 최종 업데이트: 2026-04-05

export type Source = {
  label: string;
  url: string;
  publisher: string;
};

export type Achievement = {
  id: string;
  title: string;
  lead: string;
  description: string;
  impact?: string;
  sources?: Source[];
};

export type Category = {
  id: string;
  order: number;
  badge: string;
  title: string;
  tagline: string;
  intro: string;
  color: {
    bg: string;
    text: string;
    accent: string;
  };
  achievements: Achievement[];
};

export const ministerProfile = {
  name: "윤호중",
  title: "제5대 행정안전부 장관",
  appointedAt: "2025년 7월 19일",
  government: "이재명 정부 초대 행안부 장관",
  vision: "국민 삶에 플러스, 행복안전부",
  motto: "지극히 공평하고 사사로움 없는(至公無私) 리더십",
};

export const categories: Category[] = [
  // ─────────────────────────────────────────────────────────
  // 01 · 역사적 정부혁신
  // ─────────────────────────────────────────────────────────
  {
    id: "gov-reform",
    order: 1,
    badge: "01 · 정부혁신",
    title: "역사적 정부혁신",
    tagline: "77년 만의 변화, 정부를 다시 세우다",
    intro:
      "검찰청 77년 만의 폐지, 기획재정부 분리, 기후에너지환경부 신설. 대한민국 정부조직을 근본에서부터 재설계했습니다. 국민주권 정부의 성과 창출은 제도부터 시작됐습니다.",
    color: {
      bg: "bg-slate-950",
      text: "text-white",
      accent: "text-amber-300",
    },
    achievements: [
      {
        id: "gov-reorganization",
        title: "대한민국 정부조직 대개편",
        lead: "기재부 분리 · 검찰청 폐지 · 기후에너지환경부 신설",
        description:
          "이재명 정부 첫 정부조직 개편이 2026년 1월 2일부터 단계적으로 시행되고 있습니다. 기획재정부는 기획예산처(국무총리실 산하)와 재정경제부로 분리됐고, 환경부와 산업부 에너지 기능을 통합한 기후에너지환경부가 신설됐습니다. 검찰청은 77년 만에 폐지 수순에 들어갔습니다. 행정안전부가 주무부처로서 개편안 설계와 입법 과정을 뒷받침했습니다.",
        impact: "검찰청 77년 만에 폐지 · 3개 부처 재편 · 2026.1.2 시행",
        sources: [
          {
            label: "정부, 기획재정부 분리·기후에너지환경부 신설 등 대규모 조직개편",
            url: "https://greenium.kr/news/63010/",
            publisher: "그리니엄",
          },
          {
            label: "검찰청 폐지·기재부 분리 등…정부, 정책효과성 제고 '조직개편'",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148948808",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "정부조직 개편안 공개…검찰청 77년 만에 폐지, 기재부 분리",
            url: "https://www.khan.co.kr/article/202509071820011",
            publisher: "경향신문",
          },
        ],
      },
      {
        id: "police-bureau-abolition",
        title: "경찰국 폐지 완료",
        lead: "2025년 8월 26일 공포·시행",
        description:
          "윤석열 정부 당시 2022년 8월 신설된 행안부 경찰국을 3년 만에 폐지했습니다. 2025년 7월 18일 국무회의 의결, 8월 26일 「행정안전부와 그 소속기관 직제」 개정령안 공포로 절차를 마무리했습니다. 법무부-검찰 관계를 행안부-경찰 관계로 끌어들이던 조직이 역사 속으로 사라졌습니다.",
        impact: "2022.8 신설 → 2025.8.26 폐지 · 3년 만의 정상화",
        sources: [
          {
            label: "경찰국 폐지 완료…자치경찰 지원 차질 없이 이행",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148948108",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "尹정부서 부활한 행안부 경찰국, 역사 속으로…26일 공식 폐지",
            url: "https://www.sisajournal.com/news/articleView.html?idxno=343949",
            publisher: "시사저널",
          },
        ],
      },
      {
        id: "prosecution-reform-act",
        title: "「중대범죄수사청법」 제정",
        lead: "검찰 수사권을 국민께",
        description:
          "수사권과 기소권 분리라는 검찰개혁의 기본 원칙을 법률로 못 박았습니다. 검찰청 폐지와 함께 공소청(법무부)과 중대범죄수사청(행정안전부 소속)이 신설됐습니다. 윤호중 장관은 '결자해지의 마음으로 중수청을 설치하겠다'며 직접 추진을 주도했습니다.",
        impact: "공소청·중대범죄수사청 신설 · 수사·기소권 분리 법제화",
        sources: [
          {
            label: "윤호중 '경찰국 폐지·중수청 신설'…자치분권·재정개혁 의지",
            url: "https://www.asiatoday.co.kr/kn/view.php?key=20250718010010939",
            publisher: "아시아투데이",
          },
        ],
      },
      {
        id: "honors-justice",
        title: "훈포장 재수여 · 부적절 인물 서훈 취소",
        lead: "국가의 상훈을 바로세우다",
        description:
          "비상계엄 당시 훈포장을 거부했던 의인들에게 훈포장을 다시 수여하고, 과거 부적절하게 수여된 서훈을 취소하는 작업을 진행했습니다. 국가가 누구를 기억하고 누구에게 명예를 부여할 것인지에 대한 기준을 다시 세웠습니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 02 · 민생회복
  // ─────────────────────────────────────────────────────────
  {
    id: "livelihood-recovery",
    order: 2,
    badge: "02 · 민생회복",
    title: "민생회복",
    tagline: "9조원의 온기, 4,900만의 일상",
    intro:
      "불법계엄으로 침체된 민생경제를 회복시키기 위해 전 부처 역량을 집중했습니다. 민생회복 소비쿠폰 한 장 한 장이 골목상권의 온기가 됐고, 2025년 3분기 GDP 성장률 1.3%라는 숫자로 돌아왔습니다.",
    color: {
      bg: "bg-[#3d1a0a]",
      text: "text-white",
      accent: "text-orange-300",
    },
    achievements: [
      {
        id: "consumer-coupon",
        title: "민생회복 소비쿠폰 1·2차 지급",
        lead: "4,900만 국민 · 9조원 이상",
        description:
          "이재명 정부 출범 직후 1차, 9월 12일 결정 후 22일부터 2차로 순차 지급했습니다. 전 국민 4,900만 명에게 9조원 이상을 지급해 골목상권에 직접 온기를 불어넣었고, 소비자심리지수가 111.4까지 상승하며 2025년 3분기 GDP 성장률 1.3%라는 의미 있는 성과로 이어졌습니다.",
        impact: "4,900만 국민 · 9조원+ · 소비자심리지수 111.4 · 3Q GDP 1.3%",
        sources: [
          {
            label: "민생회복 소비쿠폰 공식 안내",
            url: "https://www.mois.go.kr/frt/sub/a06/b07/livelihoodCoupon/screen.do",
            publisher: "행정안전부",
          },
          {
            label: "윤호중 '2차 민생 회복 쿠폰, 9월 12일 지급 방침 결정'",
            url: "https://www.ytn.co.kr/_ln/0101_202509020806068976",
            publisher: "YTN",
          },
        ],
      },
      {
        id: "local-gift-certificate",
        title: "지역사랑상품권 국가지원 의무화",
        lead: "최대 할인율 15%, 특별재난지역 20%",
        description:
          "지역사랑상품권의 국가지원을 제도적으로 의무화하고, 전국 할인율을 최대 15%, 특별재난지역은 20%까지 상향 조정했습니다. 2차 추경에서 확보된 예산으로 지역 골목상권을 직접 지원했습니다.",
        impact: "전국 15% · 특별재난지역 20% · 국가지원 의무화",
        sources: [
          {
            label: "이달부터 지역사랑상품권 최대 15% 할인…특별재난지역은 20%",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148948486",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "local-tax-reform",
        title: "지방세제 전면 개편 추진",
        lead: "지방 재정 자립의 토대",
        description:
          "지방 재정의 구조적 문제를 해결하기 위해 지방세제 전반의 전면 개편을 추진하고 있습니다. 지방이 스스로 재원을 확보할 수 있는 토대를 제도로 만들고 있습니다.",
      },
      {
        id: "saemaul-finance",
        title: "새마을금고 건전성 관리",
        lead: "서민 금융의 안정",
        description:
          "서민 경제의 중요한 축인 새마을금고의 건전성을 선제적으로 관리해 금융 안정성을 확보했습니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 03 · 지방의 미래
  // ─────────────────────────────────────────────────────────
  {
    id: "decentralization",
    order: 3,
    badge: "03 · 지방의 미래",
    title: "지방의 미래",
    tagline: "40년 만의 재결합, 1호 통합특별시",
    intro:
      "광주와 전남이 40년 만에 다시 만나 대한민국 1호 통합특별시가 됩니다. 인구 320만, 수도권에 대응하는 남부 거점. '권한은 더해주고 동등한 파트너로서 함께 동행한다'는 약속이 제도로 구현됐습니다.",
    color: {
      bg: "bg-[#0b3d2e]",
      text: "text-white",
      accent: "text-emerald-300",
    },
    achievements: [
      {
        id: "jeonnam-gwangju-city",
        title: "전남광주통합특별시 출범",
        lead: "2026년 7월 1일 · 인구 320만 · 1호 통합특별시",
        description:
          "1986년 광주가 전남에서 분리된 지 40년 만에 재결합합니다. 윤호중 장관은 광주 일가정양립지원본부에서 전남지사 권한대행·광주시장 권한대행과 '전남광주통합특별시 출범 준비 합동 워크숍'을 열고 '통합의 성공은 특례가 현장에서 제대로 작동하는 데 달려 있다'며 시행령 준비를 직접 챙기고 있습니다. 2026년 7월 1일 공식 출범, 대한민국 1호 통합특별시로 역사에 기록됩니다.",
        impact: "40년 만의 재결합 · 인구 320만 · 2026.7.1 출범 · 1호 통합특별시",
        sources: [
          {
            label: "전남광주통합특별시 출범… 정부·전남도·광주시 원팀으로 준비",
            url: "https://www.munhwa.com/article/11577529",
            publisher: "문화일보",
          },
          {
            label: "7월 '전남광주통합특별시' 출범…지방선거 전까지 시행령 등 제정",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148960435",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "광주·전남 40년 만에 재결합…인구 320만 '1호 통합특별시' 7월 공식 출범",
            url: "https://www.khan.co.kr/article/202603021108001",
            publisher: "경향신문",
          },
          {
            label: "전남·광주 통합, 지역소멸 극복과 대한민국 대도약의 마중물",
            url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156750902",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "fiscal-decentralization",
        title: "국가-지방 재정분권 논의 주도",
        lead: "재정의 무게중심을 지방으로",
        description:
          "지방이 스스로 미래를 설계할 수 있도록 국가-지방 재정분권 논의를 직접 주도하고 있습니다. 권한 이양과 재원 이양을 함께 추진해 명목이 아닌 실질적인 지방분권을 구현합니다.",
      },
      {
        id: "local-council-upgrade",
        title: "중앙지방협력회의 내실화",
        lead: "지방을 동등한 국정 파트너로",
        description:
          "중앙과 지방의 협력 구조를 단순한 형식에서 실질적 의사결정 기구로 격상시켰습니다. 10월 27일 회의에서는 「지방투자 활성화를 위한 기회발전특구 추진방안」을 의결하는 등 지방 주도 정책 결정의 실행력을 높였습니다.",
        sources: [
          {
            label: "지방주도 균형발전 및 지방분권 책임추진",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148922095",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "extinction-fund",
        title: "지방소멸대응기금 패러다임 개편",
        lead: "소멸을 자립으로",
        description:
          "기존의 단편적 지원 방식을 넘어 지방소멸대응기금의 운용 패러다임을 전면 개편했습니다. 지역이 스스로 일어설 수 있는 자립형 지원 구조로 전환하고 있습니다.",
      },
      {
        id: "differential-local-index",
        title: "차등지방우대지수 마련",
        lead: "지방 특성에 맞춘 정책 도구",
        description:
          "지방의 여건과 역량 차이를 반영한 차등지방우대지수를 마련해, 획일적 지원을 넘어 지역 맞춤형 정책의 과학적 근거를 확보했습니다.",
      },
      {
        id: "sunlight-income-village",
        title: "햇빛소득마을 전국 확산",
        lead: "재생에너지로 지역소득을 만들다",
        description:
          "햇빛소득마을 추진단을 출범시키고 전국 확산을 본격화했습니다. 재생에너지 발전 수익을 지역 주민의 실질 소득으로 환원하는 새로운 지역경제 모델입니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 04 · AI 민주정부
  // ─────────────────────────────────────────────────────────
  {
    id: "ai-democracy",
    order: 4,
    badge: "04 · AI 민주정부",
    title: "AI 민주정부",
    tagline: "대화 한 마디로 끝나는 정부",
    intro:
      "'등본 떼줘' 한마디면 15초 만에 발급. 정부24를 AI로 재구축하고, 네이버·카카오와 연결된 AI 국민비서를 판교에서 출범시켰습니다. 세계 최고의 AI 민주정부가 현실이 되고 있습니다.",
    color: {
      bg: "bg-[#0a1a3a]",
      text: "text-white",
      accent: "text-cyan-300",
    },
    achievements: [
      {
        id: "ai-secretary",
        title: "AI 국민비서 시범서비스 개통",
        lead: "2026년 3월 9일 판교 · 등본 발급 15초",
        description:
          "2026년 3월 9일 성남 판교테크노밸리 경기창조경제혁신센터에서 'AI 국민비서 시범서비스 개통식'을 열었습니다. 네이버·카카오톡 등 민간 AI 에이전트에서 자연어로 요청하면 공공서비스가 즉시 연결되며, 주민등록등본은 요청부터 발급까지 15초 남짓이면 끝납니다.",
        impact: "등본 발급 15초 · 네이버·카카오 연동 · 생애주기 맞춤형",
        sources: [
          {
            label: "'주민등록등본 15초면 발급'…AI 국민비서 본격 가동",
            url: "https://www.koreadaily.com/article/20260309010043492",
            publisher: "미주중앙일보",
          },
          {
            label: "AI 국민비서 시범서비스 개통",
            url: "https://www.newsis.com/view/NISI20260309_0021201727",
            publisher: "뉴시스",
          },
          {
            label: "국민비서 공식 페이지",
            url: "https://www.ips.go.kr/pot/",
            publisher: "행정안전부",
          },
        ],
      },
      {
        id: "ai-gov24",
        title: "AI 정부24+ 구축",
        lead: "대화로 찾는 공공서비스",
        description:
          "정부24+에 인공지능 기능과 민간 서비스 연계를 대폭 확대했습니다. 출생·이사·창업 등 생애주기별 맞춤 행정 정보를 제공하고, 민간 AI 기업이 참여하는 중개 플랫폼까지 구축 중입니다.",
        sources: [
          {
            label: "'이제 정부 서비스도 대화로 찾는다' AI로 똑똑해진 정부24+",
            url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156747811",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "'AI 정부24' 'AI 국민비서' 도입해 원스톱 공공서비스 제공",
            url: "https://www.ajunews.com/view/20251230150700941",
            publisher: "아주경제",
          },
        ],
      },
      {
        id: "ai-internal",
        title: "부처 내부 AI 활용 전면화",
        lead: "직원 누구나, AI를 업무에",
        description:
          "외부 서비스뿐 아니라 부처 내부에서도 직원 누구나 AI를 업무에 활용할 수 있도록 기반을 마련했습니다. 동시에 간단한 보고는 메신저로, 불필요한 대기와 형식적 보고는 과감히 줄이는 업무 방식 혁신을 병행하고 있습니다.",
        sources: [
          {
            label: "2026년 행정안전부 주요업무 추진계획",
            url: "https://www.korea.kr/news/policyFocusView.do?newsId=148956771",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "ai-documents",
        title: "AI 시대 친화적 공공문서 혁신",
        lead: "읽는 문서에서 쓰이는 문서로",
        description:
          "AI가 읽고 쓰고 요약할 수 있는 구조화된 공공문서 표준을 마련해, 정부 내부의 모든 문서가 데이터로 흐를 수 있도록 혁신하고 있습니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 05 · 국민 안전
  // ─────────────────────────────────────────────────────────
  {
    id: "public-safety",
    order: 5,
    badge: "05 · 국민 안전",
    title: "국민 안전",
    tagline: "국가가 지켜드립니다",
    intro:
      "국민 안전은 국가의 제1책무. 국정자원 화재를 3개월 만에 수습하고, 10년 평균 대비 겨울 재난 피해를 큰 폭으로 줄였습니다. 보이스피싱·마약·어린이 약취까지 — 일상을 위협하는 모든 위험에 정부가 응답합니다.",
    color: {
      bg: "bg-[#3a0f0f]",
      text: "text-white",
      accent: "text-red-300",
    },
    achievements: [
      {
        id: "data-center-fire",
        title: "국가정보자원관리원 화재 조기 수습",
        lead: "647개 시스템 · 3개월 만에 전면 복구",
        description:
          "2025년 9월 26일 대전 국가정보자원관리원 UPS실 리튬이온 배터리에서 시작된 화재로 647개 전체 정부 시스템이 마비되는 초유의 사태가 발생했습니다. 윤호중 장관은 관계부처 장관회의를 즉시 소집하고 중앙재난안전대책본부를 꾸려 대응을 총지휘했습니다. 12월 30일, 모든 시스템을 3개월 만에 완전 복구했습니다.",
        impact: "647개 시스템 전체 마비 → 3개월 내 전면 복구 완료",
        sources: [
          {
            label: "2025년 국가정보자원관리원 화재",
            url: "https://ko.wikipedia.org/wiki/2025%EB%85%84_%EA%B5%AD%EA%B0%80%EC%A0%95%EB%B3%B4%EC%9E%90%EC%9B%90%EA%B4%80%EB%A6%AC%EC%9B%90_%ED%99%94%EC%9E%AC",
            publisher: "위키백과",
          },
          {
            label: "국가정보자원관리원 행정정보시스템 화재 관련 중대본 브리핑",
            url: "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156726823",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "국가정보자원관리원 화재로 멈췄던 709개 시스템 모두 복구 완료",
            url: "https://jr.etnews.com/20251230000047",
            publisher: "전자신문",
          },
        ],
      },
      {
        id: "winter-disaster",
        title: "겨울철 자연재난 대책 성과",
        lead: "10년 평균 대비 피해 큰 폭 감소",
        description:
          "2025-2026년 겨울철 자연재난(대설·한파) 대책 기간 운영 결과, 지난 10년 평균 대비 인명·재산 피해가 큰 폭으로 감소했습니다. 집중된 대설에도 선제적 예방과 현장 대응으로 국민 피해를 최소화했습니다.",
        impact: "10년 평균 대비 인명·재산 피해 대폭 감소",
        sources: [
          {
            label: "집중된 대설에도 큰 피해 없이 겨울철 대책 기간 마무리",
            url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156751698",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "first-day-response",
        title: "취임 첫날, 집중호우 대책본부 주재",
        lead: "장관의 첫 공식 일정은 재난 현장이었습니다",
        description:
          "2025년 7월 19일 취임 첫 공식 일정으로 집중호우 대처 중앙재난안전대책본부 회의를 직접 주재했습니다. 장관의 첫 발걸음이 재난 현장에 맞춰진다는 메시지를 제도적으로 각인시켰습니다.",
      },
      {
        id: "voice-phishing-unit",
        title: "범정부 보이스피싱 통합대응기구 설치",
        lead: "흩어진 대응을 하나로",
        description:
          "부처별로 흩어져 있던 보이스피싱 대응 역량을 범정부 통합대응기구로 결집시켰습니다. 기존 임시 조직이었던 정부합동수사단을 정식 직제의 '합동수사부'로 전환하고, 국제공조 수사와 사기죄 처벌을 강화했습니다.",
        sources: [
          {
            label: "내년 '보이스피싱 범죄 합동수사부' 신설…사기죄 처벌 강화",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148956825",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "정부, 마약·보이스피싱 등 민생범죄 총력 대응",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148940285",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "drug-response",
        title: "마약범죄 대응역량 집중 보강",
        lead: "무관용 원칙",
        description:
          "민생을 위협하는 마약범죄에 대해 정부 수사역량을 총결집해 대응역량을 집중 보강했습니다. 연 2회 범정부 합동특별단속을 정례화했습니다.",
        sources: [
          {
            label: "정부, 국민의 안전을 위협하는 민생범죄 총력 대응",
            url: "https://www.fsc.go.kr/no010101/84097",
            publisher: "금융위원회",
          },
        ],
      },
      {
        id: "child-protection",
        title: "어린이 약취유인 대책 수립",
        lead: "가장 약한 이를 가장 강하게",
        description:
          "어린이 약취·유인 범죄에 대한 종합 대책을 수립했습니다. 국회 어린이 안전포럼 대표 경험을 가진 장관의 이력이 정책에 직결된 사례입니다.",
      },
      {
        id: "disaster-workers",
        title: "재난안전 종사자 처우 개선",
        lead: "현장 최전선을 든든하게",
        description:
          "재난 현장에서 국민 생명을 지키는 종사자들의 처우와 근무 여건을 실질적으로 개선했습니다. 국민 안전을 지키는 이들을 먼저 지키는 것이 원칙입니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 06 · 민주주의의 회복
  // ─────────────────────────────────────────────────────────
  {
    id: "democracy-restoration",
    order: 6,
    badge: "06 · 민주주의 회복",
    title: "민주주의의 회복",
    tagline: "빛의 혁명, 그 이름을 기억합니다",
    intro:
      "비상계엄의 어둠을 뚫고 시민의 손으로 지켜낸 민주주의. '빛의 혁명' 기여자들에게 훈포장을 수여하고, 제3기 진실·화해위원회를 출범시키며, 과거사의 상처를 다시 마주했습니다. 민주주의는 기억에서 회복됩니다.",
    color: {
      bg: "bg-[#1e0a2a]",
      text: "text-white",
      accent: "text-violet-300",
    },
    achievements: [
      {
        id: "light-revolution-honors",
        title: "빛의 혁명 기여자 인증·포상",
        lead: "시민의 용기를 국가가 기록하다",
        description:
          "2024년 12·3 비상계엄을 막아낸 '빛의 혁명' 기여자에 대한 인증과 유공 포상을 추진했습니다. 국가가 민주주의를 지킨 시민의 이름을 공식 기록으로 남기는 일을 직접 시작했습니다.",
      },
      {
        id: "truth-reconciliation-3",
        title: "제3기 진실·화해위원회 출범",
        lead: "과거를 마주해야 미래가 열립니다",
        description:
          "책임있고 미래지향적인 자세로 과거사 문제를 풀어나가기 위해 제3기 진실·화해를위한과거사정리위원회를 출범시켰습니다. 국가의 책임을 기억하고 피해자의 목소리에 귀 기울이는 제도적 플랫폼입니다.",
      },
      {
        id: "jeju-gwangju",
        title: "제주 4·3 · 광주 5·18 현장 방문",
        lead: "국가가 기억합니다",
        description:
          "광주 국립 5·18 민주묘지에 참배하고 '광주 5·18 정신을 이어 지방자치를 더욱 성숙시켜 나가겠다'는 뜻을 밝혔습니다. 제주 4·3 등 과거사 현장도 찾아 피해자와 유가족을 위로했습니다.",
        sources: [
          {
            label: "윤호중 '광주 5·18 정신 이어 지방자치 더욱 성숙시켜 나갈 것'",
            url: "https://biz.heraldcorp.com/article/10612742",
            publisher: "헤럴드경제",
          },
        ],
      },
      {
        id: "hate-speech-countermeasures",
        title: "혐오집회·혐오현수막 대책",
        lead: "공공의 광장을 지키다",
        description:
          "혐오현수막 조치를 확행하고 정당현수막 특례 폐지를 추진했습니다. '혐오집회 법집행 대책'을 국가경찰위원회 안건으로 부의해 공공의 광장이 혐오와 폭력에 의해 훼손되지 않도록 했습니다.",
      },
      {
        id: "social-economy-law",
        title: "「사회연대경제기본법」 제정 추진",
        lead: "공동체가 답이다",
        description:
          "사회 양극화와 지방소멸이라는 구조적 난제의 해답을 사회연대경제에서 찾았습니다. 행안부가 주무부처로서 기본법 제정을 직접 추진하며, 2026년 상반기 제정을 목표로 당정대협의회가 가동되고 있습니다.",
        impact: "2026년 상반기 법 제정 목표 · 당정대협의회 첫 개최",
        sources: [
          {
            label: "첫 사회연대경제 당정대협의회 연 민주당, 기본법 제정 속도",
            url: "https://futurechosun.com/archives/137349",
            publisher: "더나은미래",
          },
          {
            label: "윤호중 '시민사회 참여 사회연대경제, 경제의 중요 축으로'",
            url: "https://biz.heraldcorp.com/article/10662879",
            publisher: "헤럴드경제",
          },
          {
            label: "윤호중 '사회 양극화, 지방소멸 극복 위해 사회연대경제 필요'",
            url: "https://www.sedaily.com/NewsView/2K76OLYQMN",
            publisher: "서울경제",
          },
        ],
      },
      {
        id: "honor-restoration",
        title: "훈포장 재수여 · 서훈 취소",
        lead: "국가의 명예를 바로세우다",
        description:
          "과거 훈포장을 거부했던 의인들에게 훈포장을 다시 수여하는 절차를 추진하고, 부적절하게 서훈된 인물의 서훈을 취소했습니다. 국가가 누구를 명예롭게 기억할 것인지의 기준을 다시 세웠습니다.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 07 · 새로운 행안부
  // ─────────────────────────────────────────────────────────
  {
    id: "new-ministry",
    order: 7,
    badge: "07 · 새로운 행안부",
    title: "새로운 행안부",
    tagline: "국민 삶에 플러스, 행복안전부",
    intro:
      "'국민 삶에 플러스, 행복안전부'라는 비전 아래 부처를 다시 설계했습니다. 최초의 여성 1급 실장 임명, 업무보고 대국민 공개, MZ 직원소통 포럼까지 — 일하는 방식부터 문화까지 행안부 전체가 바뀌고 있습니다.",
    color: {
      bg: "bg-[#1a1a2e]",
      text: "text-white",
      accent: "text-indigo-300",
    },
    achievements: [
      {
        id: "happy-safety-vision",
        title: "'국민 삶에 플러스, 행복안전부' 비전 제시",
        lead: "이름은 행정안전부, 역할은 행복안전부",
        description:
          "부처의 존재 이유를 '국민 삶에 플러스'를 더하는 것으로 재정의했습니다. 안전만 지키는 정부가 아니라 행복을 더하는 정부로의 전환을 비전으로 선언했습니다.",
      },
      {
        id: "first-female-bureau-chief",
        title: "최초의 여성 1급 실장 임명",
        lead: "부내 고위공무원 균형 인사",
        description:
          "행정안전부 최초로 여성 1급 실장을 임명하며 부내 고위공무원 인사에 균형을 구현했습니다. '지극히 공평하고 사사로움 없는(至公無私)' 인사 원칙이 현실로 옮겨진 사례입니다.",
      },
      {
        id: "open-briefing",
        title: "업무보고 전과정 대국민 공개",
        lead: "밀실에서 광장으로",
        description:
          "소속청과 산하기관의 업무보고를 처음으로 전 과정 대국민 공개로 전환했습니다. 행정의 불투명한 관행을 '광장에서의 정부'로 바꾸는 실험입니다.",
        sources: [
          {
            label: "윤호중 장관 2026년 행정안전부 주요업무 추진계획 발표",
            url: "https://www.korea.kr/news/policyFocusView.do?newsId=148956771",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "mz-forum",
        title: "MZ 눈높이 직원소통 포럼",
        lead: "장관실에서 들리는 신입의 목소리",
        description:
          "MZ 세대 직원의 눈높이에서 진행하는 직원소통 포럼을 정례화했습니다. 조직의 가장 젊은 목소리가 의사결정 현장에 직접 닿도록 통로를 열었습니다.",
      },
      {
        id: "policy-plus-forum",
        title: "「정책플러스 토론회」 정례화",
        lead: "실무자가 주인공인 토론",
        description:
          "국별로 「정책플러스 토론회」를 개최해 실무 공무원이 직접 정책 현안을 발표하고 토론하는 자리를 제도화했습니다. 위계가 아닌 전문성이 판단 기준이 되는 부처 문화로의 전환입니다.",
      },
      {
        id: "senior-day-abolition",
        title: "'간부 모시는 날' 근절",
        lead: "낡은 의전을 걷어내다",
        description:
          "관행적으로 이어지던 '간부 모시는 날'을 근절하고, 전부처 최초 '헌법존중 TF'를 가동해 조직문화 개선의 기준을 헌법 가치에 맞춰 다시 정립했습니다.",
      },
      {
        id: "anti-gapjil",
        title: "갑질 무관용 원칙 확립",
        lead: "즉시 조기 분리, 선제 대응",
        description:
          "부처 내 갑질에 대해 무관용 원칙을 확립하고, 발생 즉시 조기 분리하는 선제 대응 체계를 구축했습니다. 피해자가 목소리를 낼 수 있는 조직을 만들고 있습니다.",
      },
      {
        id: "union-dialogue",
        title: "공무원 노조 · MZ 직원 정례 소통",
        lead: "인사 개선의 출발은 현장의 목소리",
        description:
          "공무원 노조와의 정례 면담에서 인사 개선 사항을 직접 청취하고, 직원 첫 만남·추석 메시지·격려 간식 배부 등 일상적 소통을 꾸준히 이어가고 있습니다.",
      },
    ],
  },
];

export const heroStats = [
  { value: "77년", label: "검찰청 폐지 · 77년 만의 변화" },
  { value: "320만", label: "전남광주통합특별시 · 1호 통합특별시" },
  { value: "9조+", label: "민생회복 소비쿠폰 · 4,900만 국민" },
  { value: "15초", label: "AI 국민비서 · 등본 발급" },
];
