import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1020 0%, #1a0f2e 100%)",
          color: "#fcd34d",
          fontWeight: 900,
          fontSize: 40,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        尹
      </div>
    ),
    { ...size },
  );
}
