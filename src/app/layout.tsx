import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "윤호중 행정안전부 장관 | 주요 성과",
  description:
    "국민주권 정부의 성과를 제도로 뒷받침한 윤호중 행정안전부 장관의 주요 성과 공식 기록",
  openGraph: {
    title: "윤호중 행정안전부 장관 | 주요 성과",
    description:
      "정부혁신 · 지방분권 · AI 디지털정부 · 재난안전 · 민생치안까지",
    locale: "ko_KR",
    type: "website",
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
