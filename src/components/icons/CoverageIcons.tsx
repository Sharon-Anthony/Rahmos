import type { SVGProps } from "react";
import type { CoverageIcon } from "@/content/coverage";

type Props = { className?: string };

// pathLength=1 on every shape lets CSS "draw" each stroke in.
const P = (p: SVGProps<SVGPathElement>) => <path pathLength={1} {...p} />;
const C = (p: SVGProps<SVGCircleElement>) => <circle pathLength={1} {...p} />;

const svg = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Uae({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M3 44h42" />
      <P d="M12 44 14 28l1.5-8 1-8 .7-7 .6 7 1 8 1.7 8 2 16" />
      <P d="M14 28h6.5M15.5 20h3.6M16.5 12h1.4" />
      <P d="M30 8c9 5 12 15 10 36" />
      <P d="M30 8v36" />
      <P d="M33 19v25M36 27v17" />
    </svg>
  );
}

function Saudi({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M5 44h38" />
      <P d="M14 44V10c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v34" />
      <P d="M18.5 8v10a5.5 5.5 0 0 0 11 0V8" />
      <P d="M14 27h20M14 33h20M14 39h20" />
      <P d="M24 8V3" />
    </svg>
  );
}

function Qatar({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M12 44h24" />
      <P d="M24 3c-3.2 4-5.2 9-5.2 15 0 3.4 1.2 5.6 2.2 8l-1.2 18h8.4L26 26c1-2.4 2.2-4.6 2.2-8 0-6-2-11-5.2-15" />
      <P d="M24 8v17" />
      <P d="M21.6 30l4.8 5M26.4 30l-4.8 5M21 37l6 6M27 37l-6 6" />
    </svg>
  );
}

function Kuwait({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M4 44h40" />
      <P d="M16 44 18 3l2 41" />
      <C cx="18" cy="31" r="6" />
      <C cx="18" cy="15" r="2.6" />
      <P d="M30 44l1.5-26L33 44" />
      <C cx="31.5" cy="34" r="4" />
    </svg>
  );
}

function Bahrain({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M3 44h42" />
      <P d="M5 44c3-10 6-22 8-36 2 14 5 26 8 36" />
      <P d="M27 44c3-10 6-22 8-36 2 14 5 26 8 36" />
      <P d="M16.5 26h15" />
      <C cx="24" cy="26" r="3.2" />
      <P d="M24 22.8v-2M24 29.2v2M20.8 26h-2M27.2 26h2" />
    </svg>
  );
}

function Oman({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M3 44h42" />
      <P d="M5 44V28h38v16" />
      <P d="M8 28V13h2.5v2.5h3V13H16v15" />
      <P d="M32 28V8h2.5v3h3V8H40v20" />
      <P d="M19.5 44V37a4.5 4.5 0 0 1 9 0v7" />
      <P d="M5 28h3M16 28h16M40 28h3" />
      <P d="M36 8V3l4 1.5L36 6" />
    </svg>
  );
}

export const coverageIcons: Record<CoverageIcon, (p: Props) => React.JSX.Element> = {
  uae: Uae,
  saudi: Saudi,
  qatar: Qatar,
  kuwait: Kuwait,
  bahrain: Bahrain,
  oman: Oman,
};