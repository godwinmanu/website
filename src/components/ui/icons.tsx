import type { SVGProps } from "react";

export function DevToIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer box */}
      <rect x="2" y="4" width="20" height="16" rx="2" />
      {/* D */}
      <path d="M5.5 8.5H6.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5.5V8.5Z" />
      {/* E */}
      <path d="M11 8.5h2M11 12h1.5M11 15.5h2M11 8.5v7" />
      {/* V */}
      <path d="M15.5 8.5l1.5 7 1.5-7" />
    </svg>
  );
}
