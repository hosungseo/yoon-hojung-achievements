import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hosungseo.github.io/yoon-hojung-achievements"),
  title: "77년 만의 변화 · 윤호중 행정안전부 장관의 기록",
  description:
    "검찰청 77년 폐지 · 전남광주통합특별시 · 9조원 민생회복 · AI 민주정부. 국민 삶에 플러스, 행복안전부 — 제도로 남긴 약속을 기록합니다.",
  openGraph: {
    title: "77년 만의 변화 · 윤호중의 기록",
    description:
      "검찰청 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 국민비서 15초",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "77년 만의 변화 · 윤호중의 기록",
    description:
      "검찰청 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 국민비서 15초",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
