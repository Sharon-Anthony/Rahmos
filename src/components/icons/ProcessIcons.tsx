import type { ProcessIcon } from "@/content/process";

type P = { className?: string };

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Talk({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 7.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 21 7.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3.5V17H7.5A2.5 2.5 0 0 1 5 14.5z" />
      <path d="M24 11.5h.5a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H24v3.5L19.5 22.5H15" />
      <path d="M9.5 9.5h7M9.5 12.5h4" />
    </svg>
  );
}

function Route({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="16" cy="6.5" r="2.5" />
      <circle cx="7" cy="25" r="2.5" />
      <circle cx="25" cy="25" r="2.5" />
      <path d="M16 9v6.5M16 15.5c0 3-9 2.5-9 7M16 15.5c0 3 9 2.5 9 7" />
    </svg>
  );
}

function Licence({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4.5h11l5 5V27H8z" />
      <path d="M19 4.5v5h5" />
      <path d="M12 14h8M12 18h5" />
      <circle cx="20.5" cy="23" r="3" />
      <path d="M19.2 25.8 18.5 29l2-1 2 1-.7-3.2" />
    </svg>
  );
}

function Passport({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="4" width="15" height="21" rx="2" />
      <circle cx="13.5" cy="12" r="3.5" />
      <path d="M10 12h7M13.5 8.5c-1.2 1.2-1.2 5.8 0 7M13.5 8.5c1.2 1.2 1.2 5.8 0 7" />
      <path d="M9.5 20h8" />
      <rect x="17" y="19" width="10" height="8" rx="1.8" fill="var(--icon-fill, none)" />
      <path d="M17 22h10" />
    </svg>
  );
}

function Growth({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 27h22" />
      <path d="M8 27v-5M14 27v-9M20 27v-6" />
      <path d="M6 15l6-5 4 3.5L26 5" />
      <path d="M20 5h6v6" />
    </svg>
  );
}

export const processIcons: Record<ProcessIcon, (p: P) => React.JSX.Element> = {
  talk: Talk,
  route: Route,
  licence: Licence,
  passport: Passport,
  growth: Growth,
};