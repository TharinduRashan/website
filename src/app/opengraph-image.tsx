import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export const alt = "Cloudzyne — Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/images/brand/cloudzyne-vortex-lockup.png")
  );
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Cloudzyne"
            style={{
              height: 60,
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "#2373F4",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Software Solutions &bull; Sri Lanka
          </div>
          <div
            style={{
              color: "#0A0A0A",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 950,
            }}
          >
            We build software that moves businesses forward.
          </div>
        </div>

        <div
          style={{
            color: "#64748B",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          cloudzyne.com &bull; Custom Software &bull; Web &bull; Mobile &bull; AI
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
