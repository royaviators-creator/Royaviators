import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0f172a",
          color: "#ffffff",
          display: "flex",
          fontSize: 34,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.05em",
          width: "100%",
        }}
      >
        R
      </div>
    ),
    size,
  );
}
