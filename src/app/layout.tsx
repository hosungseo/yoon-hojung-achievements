import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const SITE_URL = "https://hosungseo.github.io/yoon-hojung-achievements/";

export const metadata: Metadata = {
  metadataBase: new URL("https://hosungseo.github.io/yoon-hojung-achievements"),
  title: "보통의 하루를 특별하게 지키는 일 · 윤호중 행정안전부 장관의 기록",
  description:
    "검찰청 77년 폐지 · 전남광주통합특별시 · 9조원 민생회복 · AI 민주정부. 국민 삶에 플러스, 행복안전부 — 제도로 남긴 약속을 기록합니다.",
  openGraph: {
    title: "보통의 하루를 특별하게 지키는 일 · 윤호중의 기록",
    description:
      "검찰청 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 국민비서 15초",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "보통의 하루를 특별하게 지키는 일 · 윤호중의 기록",
    description:
      "검찰청 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 국민비서 15초",
  },
};

// JSON-LD structured data. Combined Person + Website + BreadcrumbList.
// Rendered once in the <head> via a plain <script> tag.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "윤호중 행정안전부 장관 주요 성과",
      inLanguage: "ko-KR",
      description:
        "제5대 행정안전부 장관 윤호중의 주요 정책 성과를 정리한 비공식 아카이브",
      publisher: {
        "@type": "Person",
        name: "서호성",
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#yoon-ho-joong`,
      name: "윤호중",
      alternateName: "Yoon Ho-joong",
      jobTitle: "제5대 행정안전부 장관",
      nationality: { "@type": "Country", name: "대한민국" },
      worksFor: {
        "@type": "GovernmentOrganization",
        name: "대한민국 행정안전부",
        alternateName: "Ministry of the Interior and Safety",
        url: "https://www.mois.go.kr",
      },
      url: SITE_URL,
    },
    {
      "@type": "Article",
      "@id": `${SITE_URL}#article`,
      mainEntityOfPage: SITE_URL,
      headline: "보통의 하루를 특별하게 지키는 일",
      description:
        "검찰청 77년 폐지, 전남광주통합특별시 출범, 9조원 민생회복 소비쿠폰, AI 국민비서 15초 등 제5대 행정안전부 장관 윤호중의 주요 성과",
      about: { "@id": `${SITE_URL}#yoon-ho-joong` },
      isPartOf: { "@id": `${SITE_URL}#website` },
      inLanguage: "ko-KR",
      keywords: [
        "윤호중",
        "행정안전부",
        "정부조직개편",
        "경찰국 폐지",
        "중대범죄수사청",
        "전남광주통합특별시",
        "민생회복 소비쿠폰",
        "AI 국민비서",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
