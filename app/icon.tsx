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
          background: "#0a0a0b",
          borderRadius: 14,
          color: "#fbfbfa",
          fontSize: 30,
          fontWeight: 600,
          fontFamily: "Menlo, monospace",
          letterSpacing: -1,
        }}
      >
        SB
      </div>
    ),
    { ...size }
  );
}
