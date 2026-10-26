import type { SVGProps } from "react";
import type { WhyUsIcon } from "@/content/whyUs";

type Props = { className?: string };

// pathLength=1 on every shape lets CSS "draw" each stroke in.
const P = (p: SVGProps<SVGPathElement>) => <path pathLength={1} {...p} />;
const C = (p: SVGProps<SVGCircleElement>) => <circle pathLength={1} {...p} />;
const R = (p: SVGProps<SVGRectElement>) => <rect pathLength={1} {...p} />;

const svg = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Window({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <R x="5" y="6" width="22" height="20" rx="2.5" />
      <P d="M5 12.5h22" />
      <P d="M16 12.5V26" />
      <P d="M8.5 9.3h.01M11.5 9.3h.01" />
    </svg>
  );
}

function Globe({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <C cx="16" cy="16" r="11" />
      <P d="M5 16h22" />
      <P d="M16 5c-4.5 3.2-4.5 18.8 0 22M16 5c4.5 3.2 4.5 18.8 0 22" />
    </svg>
  );
}

function Clock({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <C cx="16" cy="16" r="11" />
      <P d="M16 9v7l4.5 2.8" />
    </svg>
  );
}

function Shield({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <P d="M16 4 6 8v8c0 6.2 4.4 10 10 12 5.6-2 10-5.8 10-12V8z" />
      <P d="m11.5 16.2 3.2 3.2 6-6.4" />
    </svg>
  );
}

function Compass({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <C cx="16" cy="16" r="11" />
      <P d="m20.6 11.4-2.2 7-7 2.2 2.2-7z" />
      <C cx="16" cy="16" r="0.9" />
    </svg>
  );
}

function Link({ className }: Props) {
  return (
    <svg {...svg} className={className}>
      <C cx="12" cy="16" r="7" />
      <C cx="20" cy="16" r="7" />
    </svg>
  );
}

export const whyUsIcons: Record<WhyUsIcon, (p: Props) => React.JSX.Element> = {
  window: Window,
  globe: Globe,
  clock: Clock,
  shield: Shield,
  compass: Compass,
  link: Link,
};