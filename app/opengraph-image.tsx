import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ color: "#2563eb", fontSize: 28, fontWeight: 800, letterSpacing: 3 }}>
          IMPACT SYSTEMS CONSULTANCY
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: 0, marginTop: 28 }}>
          {siteName}
        </div>
        <div style={{ color: "#334155", fontSize: 36, lineHeight: 1.35, marginTop: 24, maxWidth: 920 }}>
          {siteDescription}
        </div>
      </div>
    ),
    size,
  );
}
