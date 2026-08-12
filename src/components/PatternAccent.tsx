import { ComponentPropsWithoutRef } from "react";

type PatternVariant = "curl" | "loop" | "wave" | "spiral";

const PATHS: Record<PatternVariant, string> = {
  curl: `M28 214C62 198 92 168 104 132C116 94 122 52 108 24C100 8 82 -2 66 6C46 16 44 42 56 58C72 78 104 82 126 68`,
  loop: `M22 176C18 120 34 68 74 42C114 16 162 24 182 62C202 102 182 152 138 170C96 188 54 168 46 124C40 90 62 44 108 40`,
  wave: `M20 140C60 100 76 60 120 76C164 94 150 150 200 126C242 106 238 52 282 44`,
  spiral: `M160 178C102 182 52 142 50 92C48 42 104 10 158 26C216 44 260 98 242 156C226 208 160 232 112 206C68 184 58 128 84 94`,
};

const VARIANTS: Record<PatternVariant, string> = {
  curl: "w-72 h-56 sm:w-80 sm:h-64",
  loop: "w-56 h-48 sm:w-64 sm:h-56",
  wave: "w-72 h-40 sm:w-96 sm:h-48",
  spiral: "w-56 h-56 sm:w-64 sm:h-64",
};

type PatternAccentProps = ComponentPropsWithoutRef<"svg"> & {
  variant?: PatternVariant;
  color?: string;
  opacity?: number;
  rotate?: number;
};

export default function PatternAccent({
  variant = "curl",
  color = "var(--forest)",
  opacity = 0.06,
  rotate = 0,
  className = "",
  ...rest
}: PatternAccentProps) {
  return (
    <svg
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
      className={`pointer-events-none absolute ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      <path
        d={PATHS[variant]}
        stroke={color}
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
    </svg>
  );
}