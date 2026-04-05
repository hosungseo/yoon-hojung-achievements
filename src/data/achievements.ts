// 윤호중 행정안전부 장관 주요 성과 데이터
// 대외 공식 홍보용 — 공개 보도/정책브리핑/부처 자료 기반 검증 데이터
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
};

export const categories: Category[] = [
  {
    id: "gov-reform",
    order: 1,
    badge: "01 / 정부혁신",
    title: "정부혁신",
    tagline: "국민주권 정부를 제도로 뒷받침하다",
    intro:
      "경찰국 폐지, 검·경 수사권 재정립, 조직문화 개혁까지 — 국민주권 정부의 성과 창출을 뒷받침하는 제도적 기반을 속도감 있게 마련했습니다.",
    color: {
      bg: "bg-slate-950",
      text: "text-white",
      accent: "text-amber-300",
    },
    achievements: [
      {
        id: "police-bureau-abolition",
        title: "경찰국 폐지 완료",
        lead: "2025년 8월 26일 공포·시행",
        description:
          "윤석열 정부 당시 2022년 8월 신설된 행안부 경찰국을 3년 만에 폐지했습니다. 2025년 7월 18일 국무회의 의결, 8월 26일 「행정안전부와 그 소속기관 직제」 개정령안 공포로 절차를 마무리했습니다. 법무부-검찰 관계를 행안부-경찰 관계로 끌어들이는 수단이었던 조직을 역사 속으로 돌려보냈습니다.",
        impact: "2022년 8월 신설 → 2025년 8월 폐지 · 3년 만의 정상화",
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
        id: "prosecution-reform",
        title: "중대범죄수사청(중수청) 신설 찬성",
        lead: "수사권·기소권 분리, 검찰개혁의 기본 원칙",
        description:
          "인사청문회에서 수사권과 기소권 분리를 검찰개혁의 가장 기본 원칙으로 제시하고, 중대범죄수사청 신설에 명확한 찬성 입장을 표명했습니다. 행안부 장관이 수사 지휘권을 갖지 않는다는 점을 분명히 해, 행정과 수사의 경계를 재정립했습니다.",
        sources: [
          {
            label: "윤호중 '경찰국 폐지·중수청 신설'…자치분권·재정개혁 의지",
            url: "https://www.asiatoday.co.kr/kn/view.php?key=20250718010010939",
            publisher: "아시아투데이",
          },
          {
            label: "윤호중 행안장관 후보 청문회",
            url: "https://www.newsis.com/view/NISX20250717_0003256309",
            publisher: "뉴시스",
          },
        ],
      },
      {
        id: "organization-culture",
        title: "행안부 조직문화 개혁",
        lead: "AI·메신저·존댓말·근무시간 외 연락 자제",
        description:
          "2026년 신년사에서 간단한 보고는 메신저로, 불필요한 대기와 형식적 보고는 과감히 줄이겠다고 선언했습니다. 직원 누구나 AI를 업무에 활용할 수 있게 하고, 존댓말 사용과 근무시간 외 연락 자제 문화를 제도화해 관료 조직의 일하는 방식 자체를 바꾸고 있습니다.",
        sources: [
          {
            label: "윤호중 '사회연대경제로 민생 회복'…행안부, 2026년 국정 전면에",
            url: "https://www.eroun.net/news/articleView.html?idxno=70368",
            publisher: "이로운넷",
          },
        ],
      },
    ],
  },
  {
    id: "decentralization",
    order: 2,
    badge: "02 / 지방분권",
    title: "지방분권 · 균형발전",
    tagline: "주민주권에 기반한 진짜 자치",
    intro:
      "중앙지방협력회의를 통한 지방 주도 균형발전, 지역사랑상품권 국가지원, 기회발전특구 의결까지 — 지방이 스스로 미래를 설계할 수 있도록 권한을 과감히 이양하고 있습니다.",
    color: {
      bg: "bg-[#0b3d2e]",
      text: "text-white",
      accent: "text-emerald-300",
    },
    achievements: [
      {
        id: "local-gift-certificate",
        title: "지역사랑상품권 국가지원 확대",
        lead: "최대 할인율 15%, 특별재난지역 20%",
        description:
          "민생회복 소비쿠폰과 연계해 지역사랑상품권의 전국 할인율을 최대 15%(특별재난지역 20%)까지 상향 조정했습니다. 2차 추경에서 확보된 지역사랑상품권 예산을 집행해 지역 골목상권과 민생회복의 엔진으로 작동시켰습니다.",
        impact: "전국 할인율 15% / 특별재난지역 20% · 골목상권 소비 확대",
        sources: [
          {
            label: "이달부터 지역사랑상품권 최대 15% 할인…특별재난지역은 20%",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148948486",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
      {
        id: "consumer-coupon",
        title: "민생회복 소비쿠폰 집행",
        lead: "4,900만 국민 · 9조원 이상 지급",
        description:
          "이재명 정부 출범 직후 민생회복 소비쿠폰을 전 국민 4,900만 명을 대상으로 9조원 이상 지급했습니다. 2차 지급분은 9월 12일 지급 결정, 9월 22일부터 순차 집행. 소비자심리지수가 111.4까지 상승하고 2025년 3분기 GDP 성장률 1.3%라는 의미 있는 성과로 이어졌습니다.",
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
        id: "local-opportunity-zones",
        title: "기회발전특구 추진방안 의결",
        lead: "중앙지방협력회의에서 지방투자 활성화",
        description:
          "10월 27일 중앙지방협력회의에서 「지방투자 활성화를 위한 기회발전특구 추진방안」을 의결했습니다. 지방이 국정 의제의 동등한 파트너로 참여하는 구조를 구축하고, 소멸위기 지역의 자주재원 확충과 대도시-지방 상생협력을 이끌어냈습니다.",
        sources: [
          {
            label: "지방주도 균형발전 및 지방분권 책임추진",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148922095",
            publisher: "대한민국 정책브리핑",
          },
        ],
      },
    ],
  },
  {
    id: "digital-ai",
    order: 3,
    badge: "03 / AI 디지털정부",
    title: "AI · 디지털정부",
    tagline: "세계 최고의 AI 민주정부",
    intro:
      "정부24+에 AI를 탑재하고, 네이버·카카오와 연결된 'AI 국민비서'를 판교에서 출범시켰습니다. 복잡한 절차 없이 대화만으로 공공서비스를 받는 시대가 열렸습니다.",
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
          "2026년 3월 9일 경기 성남 판교테크노밸리 경기창조경제혁신센터에서 'AI 국민비서 시범서비스 개통식'을 개최했습니다. 네이버·카카오톡 등 민간 AI 에이전트를 통해 자연어로 요청하면 공공서비스가 즉시 연결되며, 주민등록등본은 요청 후 발급까지 15초 남짓이면 완료됩니다.",
        impact: "등본 발급 15초 · 민간 AI(네이버·카카오) 연동 · 생애주기 맞춤형",
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
          "정부24+에 인공지능 기능과 민간 서비스 연계를 대폭 확대해, 국민이 더 쉽고 편리하게 정부 서비스를 이용할 수 있도록 개선했습니다. 출생·이사·창업 등 생애주기별 맞춤 행정 정보를 제공하고, 민간 AI 기업이 참여하는 중개 플랫폼을 구축하고 있습니다.",
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
        title: "부처 내부 AI 활용 전면 도입",
        lead: "직원 누구나 AI를 업무에",
        description:
          "외부 서비스뿐 아니라 부처 내부에서도 직원 누구나 AI를 업무에 활용할 수 있도록 기반을 마련했습니다. 행정 업무의 효율화와 의사결정 속도 개선을 통해 'AI 민주정부'의 내부 실행력을 확보했습니다.",
        sources: [
          {
            label: "2026년 행정안전부 주요업무 추진계획",
            url: "https://www.korea.kr/news/policyFocusView.do?newsId=148956771&pkgId=49500829",
            publisher: "대한민국 정책브리핑",
          },
        ],
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
      "2025-2026년 겨울철 대설·한파 대책 운영 결과, 지난 10년 대비 인명·재산 피해가 큰 폭으로 감소했습니다. 재난안전 역량을 한층 끌어올려 국민의 일상을 지키는 정부를 구현하고 있습니다.",
    color: {
      bg: "bg-[#3a0f0f]",
      text: "text-white",
      accent: "text-orange-300",
    },
    achievements: [
      {
        id: "winter-disaster",
        title: "겨울철 자연재난 대책 성과",
        lead: "10년 대비 인명·재산 피해 큰 폭 감소",
        description:
          "2025-2026년 겨울철 자연재난(대설·한파) 대책 기간 운영 결과, 지난 10년 평균 대비 인명·재산 피해가 큰 폭으로 감소했습니다. 집중된 대설에도 선제적 예방 조치와 현장 대응 체계로 국민 피해를 최소화했습니다.",
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
        id: "disaster-law",
        title: "재난 및 안전관리 기본법 개정",
        lead: "법·제도 기반 강화",
        description:
          "재난 및 안전관리 기본법 일부 개정을 통해 재난 대응 체계와 책임 구조를 정비하고 있습니다. 기후변화에 따른 대형 재난에 선제 대응할 수 있도록 법적 토대를 보강했습니다.",
        sources: [
          {
            label: "재난 및 안전관리 기본법 일부개정법률안 입법예고",
            url: "https://www.moleg.go.kr/lawinfo/makingInfo.mo?lawSeq=79348&lawCd=2000000310688&lawType=TYPE5&mid=a10104010000",
            publisher: "법제처",
          },
        ],
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
      "보이스피싱·마약·불법사금융·딥페이크 성범죄까지 — 국민 일상을 위협하는 민생 범죄에 대해 범정부 합동수사와 연 2회 특별단속으로 총력 대응하고 있습니다.",
    color: {
      bg: "bg-[#2a0a2a]",
      text: "text-white",
      accent: "text-pink-300",
    },
    achievements: [
      {
        id: "joint-crackdown",
        title: "민생범죄 범정부 합동특별단속",
        lead: "연 2회 정례화",
        description:
          "마약·보이스피싱·불법사금융·딥페이크 성범죄 등 주요 민생범죄에 대해 범정부 합동특별단속을 연 2회 정례화했습니다. 행정안전부·법무부·경찰청·금융위원회 등 관계부처가 수사·단속 역량을 총결집해 범죄조직의 실체적 뿌리까지 대응하고 있습니다.",
        impact: "연 2회 합동특별단속 정례화 · 4개 분야 통합 대응",
        sources: [
          {
            label: "정부, 마약·보이스피싱 등 민생범죄 총력 대응",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148940285",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "정부, 국민의 안전을 위협하는 민생범죄 총력 대응",
            url: "https://www.fsc.go.kr/no010101/84097",
            publisher: "금융위원회",
          },
        ],
      },
      {
        id: "voice-phishing-unit",
        title: "보이스피싱 범죄 합동수사부 정식 직제 전환",
        lead: "국제공조 수사 강화",
        description:
          "기존 임시 조직이었던 보이스피싱 범죄 정부합동수사단을 정식 직제의 '합동수사부'로 전환해 상시 대응 체계를 구축했습니다. 해외 거점 범죄조직 대응을 위한 국제공조 수사를 강화하고, 사기죄 처벌도 강화됩니다.",
        sources: [
          {
            label: "내년 '보이스피싱 범죄 합동수사부' 신설…사기죄 처벌 강화",
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148956825",
            publisher: "대한민국 정책브리핑",
          },
        ],
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
      "사회 양극화와 지방소멸이라는 구조적 난제를 극복하기 위해, 행안부가 주무부처로서 사회연대경제 생태계를 복원합니다. 2026년 상반기 기본법 제정을 목표로 속도를 내고 있습니다.",
    color: {
      bg: "bg-[#3b2a10]",
      text: "text-white",
      accent: "text-yellow-300",
    },
    achievements: [
      {
        id: "social-economy-law",
        title: "「사회연대경제기본법」 제정 추진",
        lead: "2026년 상반기 제정 목표",
        description:
          "사회연대경제를 경제의 중요한 축으로 발전시키고 지방소멸과 사회적 고립의 해법으로 제도화하기 위한 기본법 제정을 추진하고 있습니다. 민생 회복과 공동체 재건, 지속 가능한 성장으로의 전환을 위해 2026년 상반기 내 법 제정을 목표로 당정대협의회가 가동됐습니다.",
        impact: "2026년 상반기 법 제정 목표 · 당정대협의회 가동",
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
            label: "'이념 탄압 끝'…당정대, 사회연대경제 기본법 연내 제정 의지",
            url: "https://biz.heraldcorp.com/article/10620457",
            publisher: "헤럴드경제",
          },
        ],
      },
      {
        id: "social-economy-vision",
        title: "사회연대경제 비전 선포",
        lead: "행안부가 주무부처로서 책임 역할",
        description:
          "2026년 신년사에서 '사회 양극화와 지방소멸과 같은 구조적 난제를 극복하기 위해 사회연대경제를 정착시키고 지역 공동체 회복을 이끌어 나가겠다'고 선언했습니다. 행안부가 주무부처로서 사회연대경제 생태계 복원의 책임을 맡았습니다.",
        sources: [
          {
            label: "윤호중 '사회 양극화, 지방소멸 극복 위해 사회연대경제 필요'",
            url: "https://www.sedaily.com/NewsView/2K76OLYQMN",
            publisher: "서울경제",
          },
        ],
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
      "5·18 광주에서 제주 4·3까지, 국회 청문회에서 기자간담회까지 — 장관이 직접 현장을 찾아 국민과 호흡하며 정책의 체감도를 높이고 있습니다.",
    color: {
      bg: "bg-[#1a1a2e]",
      text: "text-white",
      accent: "text-indigo-300",
    },
    achievements: [
      {
        id: "gwangju-518",
        title: "국립 5·18 민주묘지 참배",
        lead: "광주 5·18 정신을 이어 지방자치로",
        description:
          "광주를 방문해 국립 5·18 민주묘지를 참배하고 오월 영령의 희생정신을 기렸습니다. '광주 5·18 정신을 이어 지방자치를 더욱 성숙시켜 나가겠다'는 의지를 밝히며, 민주주의와 지방자치의 역사적 연결고리를 강조했습니다.",
        sources: [
          {
            label: "윤호중 '광주 5·18 정신 이어 지방자치 더욱 성숙시켜 나갈 것'",
            url: "https://biz.heraldcorp.com/article/10612742",
            publisher: "헤럴드경제",
          },
        ],
      },
      {
        id: "hearing-consensus",
        title: "여야 합의 인사청문 통과",
        lead: "2025년 7월 18일 청문보고서 채택",
        description:
          "2025년 6월 29일 이재명 정부 초대 행정안전부 장관으로 지명된 후, 7월 17일 국회 행정안전위원회 인사청문회에서 여야 합의로 청문보고서가 채택되었습니다. 7월 19일 제5대 행정안전부 장관으로 정식 취임했습니다.",
        impact: "여야 합의 청문보고서 채택 · 이재명 정부 초대 행안부 장관",
        sources: [
          {
            label: "윤호중 - 나무위키",
            url: "https://namu.wiki/w/%EC%9C%A4%ED%98%B8%EC%A4%91",
            publisher: "나무위키",
          },
          {
            label: "[Who Is ?] 윤호중 행정안전부 장관",
            url: "https://www.businesspost.co.kr/BP?command=article_view&num=415564",
            publisher: "비즈니스포스트",
          },
        ],
      },
      {
        id: "local-mayors",
        title: "지방자치단체장 면담 정례화",
        lead: "지방분권 · 자주재원 · 소멸 대응 논의",
        description:
          "수원시장 등 전국 지방자치단체장과 정례 면담을 진행하며 지방분권 강화, 자주재원 확충, 대도시-지방 상생협력을 통한 지방소멸 대응을 논의하고 있습니다. 지방이 국정의 동등한 파트너라는 철학을 현장에서 구현하고 있습니다.",
        sources: [
          {
            label: "이재준 수원시장, 행안부 장관 만나 '지방분권 강화' 등 건의",
            url: "https://www.joongboo.com/news/articleView.html?idxno=363714150",
            publisher: "중부일보",
          },
        ],
      },
      {
        id: "2026-briefing",
        title: "2026년 주요업무 추진계획 대국민 발표",
        lead: "민생회복 · 진짜 자치 · AI 민주정부 · 국민 안전",
        description:
          "2026년 행정안전부 주요업무 추진계획을 공식 발표하며 4대 국정 방향(민생 회복 / 주민주권 기반 진짜 자치 / AI 민주정부 / 국민 안전)을 제시했습니다. 산하기관 업무보고와 시무식 신년사를 통해 부처 전체의 방향성을 일원화했습니다.",
        sources: [
          {
            label: "윤호중 장관 2026년 행정안전부 주요업무 추진계획 발표",
            url: "https://www.korea.kr/news/policyFocusView.do?newsId=148956771&pkgId=49500829",
            publisher: "대한민국 정책브리핑",
          },
          {
            label: "윤호중 장관, 2026년 행정안전부 산하기관 업무보고",
            url: "https://news.nate.com/view/20260108n28993",
            publisher: "네이트뉴스",
          },
        ],
      },
    ],
  },
];

export const heroStats = [
  { value: "9조+", label: "민생회복 소비쿠폰 (4,900만 국민)" },
  { value: "15초", label: "AI 국민비서 등본 발급" },
  { value: "1.3%", label: "2025년 3Q GDP 성장 기여" },
  { value: "3년", label: "경찰국 폐지 · 3년 만의 정상화" },
];
