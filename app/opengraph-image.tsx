import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          padding: "72px",
          color: "#f2f2f3",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            color: "#818cf8",
            fontFamily: "Menlo, monospace",
          }}
        >
          SB / serdar
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, color: "#98989f", display: "flex" }}>
            {siteConfig.role} · {siteConfig.location}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
