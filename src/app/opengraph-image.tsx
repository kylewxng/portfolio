import { ImageResponse } from "next/og";

export const alt = "Kyle Wong · Data Science, ML & Product";
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
          padding: 80,
          background: "#0b0b0c",
          color: "#ededeb",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#8aa4ff", letterSpacing: 4 }}>
          KYLE.WONG
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Kyle Wong</div>
          <div style={{ fontSize: 40, color: "#a6a6a1", marginTop: 12 }}>
            Data science · ML / AI · Product
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6e6e6a" }}>
          UCLA Statistics & Data Science · Los Angeles
        </div>
      </div>
    ),
    size,
  );
}
