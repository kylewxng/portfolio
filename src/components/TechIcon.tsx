import Image from "next/image";
import {
  siClaude,
  siCursor,
  siDocker,
  siExpo,
  siFastapi,
  siFigma,
  siFirebase,
  siGit,
  siJavascript,
  siLanggraph,
  siNextdotjs,
  siPandas,
  siPostgresql,
  siPython,
  siPytorch,
  siR,
  siReact,
  siScikitlearn,
  siSnowflake,
  siSupabase,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

const ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  SQL: siPostgresql,
  R: siR,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  LangGraph: siLanggraph,
  "Snowflake Cortex": siSnowflake,
  Snowflake: siSnowflake,
  "scikit-learn": siScikitlearn,
  PyTorch: siPytorch,
  pandas: siPandas,
  Postgres: siPostgresql,
  pgvector: siPostgresql,
  FastAPI: siFastapi,
  "Next.js": siNextdotjs,
  React: siReact,
  "React Native": siExpo,
  Docker: siDocker,
  Supabase: siSupabase,
  Firebase: siFirebase,
  Git: siGit,
  Figma: siFigma,
  "Claude Code": siClaude,
  Cursor: siCursor,
};

/** Logos missing from simple-icons, as PNGs in /public/logos/tech. `dark` is an optional dark-mode variant. */
const IMAGES: Record<string, { src: string; dark?: string; wide?: boolean }> = {
  "dbt Cloud": { src: "/logos/tech/dbt.png" },
  Tableau: { src: "/logos/tech/tableau.png" },
  "Power BI": { src: "/logos/tech/powerbi.png" },
  "AWS (Lambda, ECR)": { src: "/logos/tech/aws.png", dark: "/logos/tech/aws-dark.png", wide: true },
};

/** Near-black brand colors disappear in dark mode, so those follow the text color. */
function isDark(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b < 60;
}

export default function TechIcon({ name, className = "size-3.5" }: { name: string; className?: string }) {
  const img = IMAGES[name];
  if (img) {
    const size = img.wide ? "h-3.5 w-auto" : className;
    const props = { alt: "", width: img.wide ? 80 : 64, height: img.wide ? 48 : 64, "aria-hidden": true };
    return img.dark ? (
      <>
        <Image src={img.src} {...props} className={`shrink-0 ${size} dark:hidden`} />
        <Image src={img.dark} {...props} className={`hidden shrink-0 ${size} dark:block`} />
      </>
    ) : (
      <Image src={img.src} {...props} className={`shrink-0 ${size}`} />
    );
  }

  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={isDark(icon.hex) ? undefined : { color: `#${icon.hex}` }}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
