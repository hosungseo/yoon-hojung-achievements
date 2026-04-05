import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "윤호중 행정안전부 장관 주요 성과";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0a1020 0%, #0f1b3d 45%, #1a0f2e 100%)",
          color: "white",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 4,
          }}
        >
          <div style={{ color: "#fcd34d" }}>MOIS · 2026</div>
          <div style={{ color: "rgba(255,255,255,0.5)" }}>
            MINISTER · YOON HO-JUNG
          </div>
        </div>

        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#fcd34d",
              letterSpacing: 6,
              marginBottom: 20,
            }}
          >
            77년 만의 변화
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -3,
              color: "white",
              display: "flex",
            }}
          >
            윤호중
            <span style={{ color: "#fcd34d" }}>의</span>
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -3,
              color: "white",
              marginTop: -10,
            }}
          >
            기록
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 50,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 30,
          }}
        >
          {[
            { value: "77년", label: "검찰청 폐지" },
            { value: "320만", label: "1호 통합특별시" },
            { value: "9조+", label: "민생회복 소비쿠폰" },
            { value: "15초", label: "AI 국민비서" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#fcd34d" }}>
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
